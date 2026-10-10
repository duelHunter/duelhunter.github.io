---
title: "ThingsNode MCP Server"
summary: "MCP server for the ThingsBoard IoT platform with custom tools, so AI assistants can work with devices and telemetry."
tags: ["Java", "MCP", "ThingsBoard", "Docker", "IoT"]
order: 6
featured: true
demo: "https://thingsnode-mcp.vercel.app"
code: "https://github.com/duelHunter/thingsnode-mcp"
---

## Overview

A Model Context Protocol (MCP) server for ThingsBoard that lets MCP clients such as Claude Desktop talk to a ThingsBoard instance through custom-built tools.

## Key points

- **Configurable:** connects using the ThingsBoard URL and credentials supplied as environment variables.
- **Two ways to run:** as a Docker container or as a built JAR, both launched by the MCP client.
- **Java and Maven:** built with Maven, with a Dockerfile included.

## Why it matters

MCP turns an IoT platform into something an AI assistant can query and act on in natural language, without writing a one-off integration for every client.
