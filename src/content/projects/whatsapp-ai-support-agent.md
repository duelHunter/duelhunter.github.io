---
title: "WhatsApp AI Support Agent"
summary: "Self-hosted WhatsApp customer support and ordering automation powered by an LLM, with RAG and a multi-tenant admin dashboard."
tags: ["Node.js", "Next.js", "TypeScript", "Supabase", "RAG"]
order: 2
featured: true
code: "https://github.com/duelHunter/whatsapp-agent-support"
---

## Overview

A platform that connects to a real WhatsApp account and handles customer conversations automatically. It can answer questions from an uploaded knowledge base, or run a full tool-calling agent that browses a catalog, manages carts, places orders and processes payment receipts.

## Key features

- **Two agent modes per organization:** a knowledge-base mode using a RAG pipeline over uploaded PDFs and text (Supabase pgvector), and an ordering agent that searches a catalog, manages a cart and confirms orders.
- **Receipt verification:** photos of bank transfer receipts are read with local OCR (Tesseract), and the extracted amount, date and reference are shown to an admin who approves or rejects. The extraction is advisory and a human makes the final call.
- **Admin dashboard:** conversations, orders, catalog, knowledge base, analytics, WhatsApp connection status and per-organization agent settings.
- **Multi-tenant:** organizations, WhatsApp accounts and role-based access through Supabase Auth and row-level security.

## Architecture

- **Frontend:** Next.js (App Router), React and TypeScript with Tailwind CSS.
- **Backend:** Node.js and Express, with whatsapp-web.js for the WhatsApp connection.
- **Data:** Supabase (managed Postgres) with pgvector for embeddings.
- **LLM:** any OpenAI-compatible chat completions endpoint, defaulting to a local Ollama instance.
