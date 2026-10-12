---
title: "AI Chat Exporter"
summary: "Chrome extension that exports ChatGPT, Claude, Grok, DeepSeek, Perplexity and Gemini conversations as PDF, Markdown, JSON or text."
tags: ["JavaScript", "Chrome Extension", "Manifest V3", "PDF"]
order: 1
featured: true
store: "https://chromewebstore.google.com/detail/dongccfbpkhbdclegailefibonlnnjdf?utm_source=item-share-cb"
---

## Overview

A Chrome extension, published on the Chrome Web Store, that exports the conversation you have open on a supported AI chat site as a PDF, Markdown, JSON or plain-text file, or copies it to the clipboard.

## Key features

- **Export panel:** a floating Export button on supported chat pages opens a side panel where you pick exactly which messages to include, with quick All, Human, Assistant and None filters.
- **Four formats:** PDF, Markdown, JSON and text, plus copy to clipboard.
- **Chat-style PDFs:** an icon per message, your messages in a grey bubble, formatted Markdown, syntax-highlighted code, tables, formulas and uploaded images. The text is real, selectable text, and long conversations export in full.
- **Settings:** show or hide the floating button, include the conversation title or timestamps, and set a filename format with title and date placeholders.
- **Brand-aware UI:** the button uses each site's colour and the panel has a dark theme.

## Supported sites

ChatGPT, Claude, Grok, DeepSeek, Perplexity and Gemini. Most read the conversation through the site's own conversation API, while Gemini is read from the messages already shown on the page.

## Privacy by design

- It uses your existing logged-in session and does not store any login details.
- The conversation is read and the file is built entirely in your browser, and nothing is sent to a server run by the extension.
- Only settings are saved, locally in chrome.storage.

## Built with

Plain JavaScript and HTML loaded directly by Chrome with no build step, and a small Node test suite plus headless Chrome smoke tests.
