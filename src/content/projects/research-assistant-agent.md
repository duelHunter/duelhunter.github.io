---
title: "Research Assistant Agent"
summary: "ReAct-pattern research agent built with LangChain and Google Gemini that searches, calculates and cites its sources."
tags: ["Python", "LangChain", "Gemini", "AI Agents"]
order: 7
featured: false
code: "https://github.com/duelHunter/Research-Assistant-Agent"
---

## Overview

An AI research assistant built on the ReAct (Reason + Act) pattern. Instead of answering immediately it loops through thought, action and observation until it reaches a final answer with sources.

## Tools

- **Web search:** DuckDuckGo.
- **Calculator:** a safe, AST-based calculator.
- **Wikipedia:** article summaries.
- **Citation tracker:** collects the source URLs used for the answer.

## Design

- **Agent:** a LangChain AgentExecutor with a ReAct prompt template.
- **Memory:** sliding-window conversation memory.
- **Model:** Google Gemini through a small LLM factory.
- **Interface:** a command-line app.
