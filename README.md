# John Rogers — Portfolio

A multi-repository system demonstrating production-grade architecture patterns for AI-augmented applications.

---

## TL;DR

This portfolio is a single system split across three purpose-built repositories. The flagship application (ForgeBreaker) consumes two supporting services (MLForge, MCP-Gateway) to demonstrate how real systems decompose complex AI workloads into maintainable, independently deployable components.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         ForgeBreaker                            │
│              (Domain Application — MTG Deck Analysis)           │
│                                                                 │
│   Deterministic Analysis  +  ML Inference  +  LLM Tool Usage    │
└─────────────────┬───────────────────────────────────┬───────────┘
                  │                                   │
                  ▼                                   ▼
       ┌──────────────────┐                ┌──────────────────┐
       │     MLForge      │                │   MCP-Gateway    │
       │  (ML Inference)  │                │  (Tool Routing)  │
       └──────────────────┘                └──────────────────┘
```

**ForgeBreaker** is the user-facing application. It performs Magic: The Gathering deck analysis by combining:
- Deterministic card and mana curve analysis
- ML-based archetype classification (via MLForge)
- LLM-powered conversational insights (via MCP-Gateway)

**MLForge** handles model inference as a standalone service, decoupling model lifecycle from application deployment.

**MCP-Gateway** provides a stateless interface for LLM tool invocation, handling registration, discovery, and error normalization.

---

## Why Multiple Repositories?

This separation is intentional and reflects how production systems actually ship:

| Concern | Repository | Rationale |
|---------|------------|-----------|
| Domain logic | ForgeBreaker | Application-specific; changes frequently |
| Model inference | MLForge | Different deployment cadence; GPU/resource requirements differ |
| Tool orchestration | MCP-Gateway | Shared infrastructure; multiple consumers possible |

Single-repo alternatives were considered and rejected. The tradeoffs:

- **Monorepo**: Couples deployment and testing; forces infrastructure decisions into application code
- **Library extraction**: Insufficient isolation; shared process means shared failure modes
- **This approach**: Clear contracts, independent scaling, graceful degradation when dependencies are unavailable

---

## Projects

### ForgeBreaker
**Role**: Flagship domain application

A Magic: The Gathering deck analysis assistant that demonstrates how to compose deterministic logic, ML inference, and LLM capabilities into a coherent user experience.

- Full-stack implementation with React frontend and Python backend
- "Try with sample deck" flow for zero-friction demo
- Graceful degradation when MLForge or MCP-Gateway are unavailable
- Deterministic analysis always available; AI features enhance, not gate

[View Repository](https://github.com/JohnRogers/ForgeBreaker)

---

### MLForge
**Role**: ML inference service

Standalone service for model hosting and inference. Exists because model deployment has different constraints than application deployment.

- Isolates model versioning from application releases
- Enables A/B testing and gradual rollouts at the model layer
- Structured for horizontal scaling independent of application tier
- Health endpoints support circuit-breaker patterns in consumers

[View Repository](https://github.com/JohnRogers/MLForge)

---

### MCP-Gateway
**Role**: LLM tool gateway

Stateless service implementing the Model Context Protocol for tool registration, discovery, and invocation.

- Normalizes tool interfaces across multiple backend implementations
- Handles error translation and timeout management
- Designed to support multiple domain applications, not just ForgeBreaker
- Separates "what tools exist" from "how to call an LLM"

[View Repository](https://github.com/JohnRogers/MCP-Gateway)

---

## Design Philosophy

- **Separation of concerns over convenience**: More repos means more boundaries; boundaries force explicit contracts
- **Graceful degradation by default**: Every integration point has a fallback; partial functionality beats total failure
- **Demo-ability matters**: A reviewer should be able to see the system work without environment setup
- **No premature abstraction**: Each service exists because there's a concrete reason to deploy it separately
- **Operational empathy**: Health checks, structured logging, and clear error messages are not afterthoughts

---

## How to Review This Portfolio

**5 minutes:**
1. Visit ForgeBreaker and run the sample deck demo
2. Note how results include both deterministic and AI-generated insights

**15 minutes:**
1. Review ForgeBreaker's architecture documentation
2. Trace how it calls MLForge and MCP-Gateway
3. Observe the fallback behavior when services are unavailable

**30+ minutes:**
1. Clone ForgeBreaker and run locally
2. Review MLForge's model serving implementation
3. Review MCP-Gateway's tool registration flow

Start with ForgeBreaker. It's the entry point and demonstrates how the pieces fit together.

---

## What This Architecture Enables

The current implementation is complete and functional. The architecture also supports:

- **Additional domain applications**: MCP-Gateway can serve other applications beyond ForgeBreaker
- **Model experimentation**: MLForge can host multiple model versions without application changes
- **Tool expansion**: New tools register with MCP-Gateway without modifying consumers
- **Independent scaling**: Each service scales based on its specific resource profile

These are not hypothetical capabilities. The contracts are in place; the implementation work is incremental.

---

## About Me

I build systems that work correctly under real-world conditions. My focus is on the intersection of traditional software engineering and AI/ML integration—specifically, how to build AI-augmented applications that remain testable, debuggable, and maintainable.

This portfolio represents my approach: start with a working domain application, extract shared concerns into services when there's a concrete reason, and ensure the system degrades gracefully when components are unavailable.

[LinkedIn](https://linkedin.com/in/johnrogers) | [Email](mailto:john@example.com)
