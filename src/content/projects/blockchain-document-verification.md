---
title: "Blockchain Document Verification"
summary: "Decentralized system that stores documents in IPFS and records their content identifiers on Hyperledger Fabric to detect tampering."
tags: ["Hyperledger Fabric", "IPFS", "Node.js", "Blockchain", "Security"]
order: 7
featured: false
code: "https://github.com/duelHunter/blockchain-document-verification"
---

## Overview

Traditional document systems keep files on central servers, which makes them open to unauthorized changes, single points of failure and weak audit trails. This project combines decentralized storage with an immutable ledger to prove a document has not been altered.

## How it works

- **Upload:** the document goes to IPFS (Kubo), which returns a content identifier (CID). The CID is stored on a Hyperledger Fabric blockchain and a document ID is returned.
- **Verify:** the document ID is used to query the blockchain for the CID, the file is fetched from IPFS and the hashes are compared to give a verification result.

## Key features

- Upload and store documents in IPFS.
- Record document metadata on the blockchain.
- Verify the authenticity of a document.
- Immutable audit trail.
- A Node.js backend that ties IPFS and Fabric together.
