---
title: "Kafka Avro Order Pipeline"
summary: "Order processing pipeline in Java using Apache Kafka with Avro-serialized messages, producers and consumers."
tags: ["Java", "Kafka", "Avro", "Docker"]
order: 9
featured: false
code: "https://github.com/duelHunter/kafka-avro-order-pipeline"
---

## Overview

A Java order processing pipeline that sends orders through Apache Kafka as Avro-serialized messages, with the schema defined in an Avro file and a Docker Compose setup for the broker.

## Components

- **Schema:** an `Order` Avro schema shared by producer and consumers.
- **Producer:** publishes orders with custom Avro serializers.
- **Consumers:** one for order processing and one that aggregates results, each with custom Avro deserializers.
- **Failure handling:** a dedicated transient processing exception for errors that can be retried.

## Stack

Java and Maven, Apache Kafka, Apache Avro and Docker Compose.
