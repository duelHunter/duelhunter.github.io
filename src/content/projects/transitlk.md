---
title: "TransitLK - Public Transport Platform"
summary: "Microservices prototype for ticketing with QR e-tickets and live vehicle tracking, behind a Kong API gateway."
tags: ["Spring Boot", "NestJS", "Kafka", "Kong", "Docker"]
order: 2
featured: true
code: "https://github.com/duelHunter/TransitLK"
---

## Overview

A functional prototype of the core services from a public transport architecture report: user and identity, ticketing and booking with QR e-tickets, and live vehicle tracking with ETA. It is shown through a React web portal.

## Key features

- **Event-driven backbone:** three Spring Boot and NestJS services communicating over Apache Kafka.
- **API gateway:** Kong in DB-less mode with a declarative configuration.
- **Signed QR tickets:** an HMAC-signed JWT payload rendered as a QR code, so tickets can be verified offline.
- **Live tracking:** vehicle telemetry over a local MQTT broker (Mosquitto), with live state kept in Redis.
- **Database per service:** separate Postgres databases for the Java services.

## Running it

The whole system starts with a single `docker compose up --build`. Payments are a deliberate mock, and the remaining services from the report are described in the architecture but not deployed in this prototype.
