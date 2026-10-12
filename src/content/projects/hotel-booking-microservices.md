---
title: "Cloud-Native Hotel Booking System"
summary: "Microservices platform for searching hotels, booking rooms and paying, built twice to compare broker-based and direct-call communication."
tags: ["Microservices", "RabbitMQ", "Next.js", "Docker"]
order: 4
featured: true
code: "https://github.com/duelHunter/microservice-hotelbooking"
---

## Overview

A cloud-native platform where guests search for available hotels, book rooms and pay. The repository holds two variants of the same backend so the trade-offs of a message broker can be seen by running them side by side.

## The two variants

- **With broker:** services communicate asynchronously through RabbitMQ using a topic exchange, the outbox pattern and consumers. A booking returns `PENDING` immediately and payment and notification happen out of band.
- **Without broker:** every event becomes a direct blocking HTTP call. A booking waits for the hotel, payment and notification services before returning a final status.

## What it shows

- **Latency and coupling:** a slow payment or notification service stalls the request in the direct variant, while the queue absorbs it in the broker variant.
- **Resilience:** the outbox table persists events before publishing, so a crash mid-flow can be replayed.
- **Shared frontend:** one Next.js frontend works with both variants, which expose the same service ports.
