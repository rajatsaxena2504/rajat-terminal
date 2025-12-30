---
title: "CAP Theorem Explained Simply"
pubDate: 2024-12-29
category: "distributed-systems"
tags: ["cap-theorem", "consistency", "availability", "partition-tolerance"]
source: "https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html"
---

## The CAP Theorem

In a distributed system, you can only guarantee **two out of three** properties:

- **C**onsistency: Every read receives the most recent write
- **A**vailability: Every request receives a response
- **P**artition tolerance: System continues despite network partitions

## The Reality

Partitions *will* happen in any distributed system. So you're really choosing between:

- **CP**: Consistent but may be unavailable during partitions (e.g., traditional RDBMS with sync replication)
- **AP**: Available but may serve stale data during partitions (e.g., Cassandra, DynamoDB)

## Key Insight

CAP is often misunderstood. It's not about choosing 2 of 3 in all cases—it's about what happens *during* a network partition.

Most of the time, when there's no partition, you can have all three!

## Practical Examples

| System | During Partition |
|--------|-----------------|
| MongoDB (default) | CP - returns error if can't reach primary |
| Cassandra | AP - returns potentially stale data |
| Spanner | CP - uses TrueTime for global consistency |

## My Notes

Don't think of databases as "CP" or "AP" systems. Think about what guarantees you need for your specific use case, and configure accordingly.
