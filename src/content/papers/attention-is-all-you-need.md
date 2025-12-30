---
title: "Understanding the Transformer Architecture"
paperTitle: "Attention Is All You Need"
authors: ["Vaswani et al."]
arxivUrl: "https://arxiv.org/abs/1706.03762"
pubDate: 2024-12-29
paperDate: 2017-06-12
tags: ["transformers", "attention", "nlp", "deep-learning"]
tldr: "Transformers replace recurrence with self-attention, enabling parallelization and better long-range dependencies."
rating: 5
---

## Key Ideas

The Transformer architecture revolutionized NLP by replacing recurrent layers with self-attention mechanisms.

### Self-Attention

The core innovation is the scaled dot-product attention:

```
Attention(Q, K, V) = softmax(QK^T / √d_k) V
```

This allows the model to attend to all positions in a sequence simultaneously, rather than sequentially like RNNs.

### Multi-Head Attention

Instead of single attention, the model uses multiple attention "heads" that can focus on different aspects:
- Some heads might focus on syntax
- Others on semantics
- Others on long-range dependencies

### Why It Matters

1. **Parallelization**: Unlike RNNs, transformers can process entire sequences in parallel
2. **Long-range dependencies**: Self-attention has O(1) path length between any two positions
3. **Scalability**: Led to GPT, BERT, and the modern LLM revolution

## My Takeaways

This paper is foundational. Understanding attention mechanisms deeply is essential for anyone working with LLMs today.
