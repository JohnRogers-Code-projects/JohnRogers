# John Rogers — Portfolio

A multi-repository system demonstrating production-grade architecture patterns for AI-augmented applications.

---

## TL;DR

This portfolio is a single system split across purpose-built repositories. The flagship application (ForgeBreaker) consumes two supporting services (MLForge, MCP-Gateway) to demonstrate how real systems decompose complex AI workloads into maintainable, independently deployable components. LarderLab exists as a minimal second consumer of MCP-Gateway, proving the gateway's reusability across unrelated domains.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         ForgeBreaker                            │
│              (Domain Application — MTG Deck Analysis)           │
│                                                                 │
│   Deterministic Analysis  +  ML Inference  +  LLM Tool Usage    │
└─────────────────┬───────────────────────────────────────────────┬───────────┘
                  │                                   │
                  ▼                                   ▼
       ┌──────────────────┐                ┌──────────────────┐
       │     MLForge      │                │   MCP-Gateway    │
       │  (ML Inference)  │                │  (Tool Routing)  │
       └──────────────────┘                └────────┬─────────┘
                                                    │
                                                    ▲
                                           ┌────────┴─────────┐
                                           │    LarderLab     │
                                           │   (Reuse Demo)   │
                                           └──────────────────┘
```

**ForgeBreaker** is the user-facing application. It performs Magic: The Gathering deck analysis by combining:
- Deterministic card and mana curve analysis
- ML-based archetype classification (via MLForge)
- LLM-powered conversational insights (via MCP-Gateway)

**MLForge** handles model inference as a standalone service, decoupling model lifecycle from application deployment.

**MCP-Gateway** provides a stateless interface for LLM tool invocation. Both ForgeBreaker and LarderLab consume it, demonstrating that the gateway's contracts are domain-agnostic.

**LarderLab** is a lightweight meal planning demo. Its sole purpose is to prove MCP-Gateway reuse across unrelated domains. It is not a full application.

---

## Why Multiple Repositories?

This separation is intentional and reflects how production systems actually ship:

| Concern | Repository | Rationale |
|---------|------------|-----------|
| Domain logic | ForgeBreaker | Application-specific; changes frequently |
| Model inference | MLForge | Different deployment cadence; GPU/resource requirements differ |
| Tool orchestration | MCP-Gateway | Shared infrastructure; multiple consumers (ForgeBreaker, LarderLab) |
| Reuse validation | LarderLab | Proves MCP-Gateway works outside MTG domain |

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

Standalone service for model hosting and inference. Exists because model deployment has different constraints than application deployment: retraining a model should not require redeploying the application, and vice versa.

- Isolates model versioning from application releases
- Enables A/B testing and gradual rollouts at the model layer
- Structured for horizontal scaling independent of application tier
- Health endpoints support circuit-breaker patterns in consumers

[View Repository](https://github.com/JohnRogers/MLForge)

---

### MCP-Gateway
**Role**: Shared LLM tool infrastructure

Stateless service implementing the Model Context Protocol for tool registration, discovery, and invocation. Both ForgeBreaker and LarderLab route their LLM tool calls through this gateway.

- Normalizes tool interfaces across multiple backend implementations
- Handles error translation and timeout management
- Domain-agnostic by design; adding consumers requires no gateway changes
- Separates "what tools exist" from "how to call an LLM"

[View Repository](https://github.com/JohnRogers/MCP-Gateway)

---

### LarderLab
**Role**: MCP-Gateway reuse demonstration

A minimal meal planning interface that consumes MCP-Gateway. LarderLab exists to validate that MCP-Gateway works outside the MTG domain. It is intentionally lightweight—just enough functionality to prove the gateway's contracts are domain-agnostic.

If you're not interested in Magic: The Gathering, LarderLab provides an alternative entry point to see MCP-Gateway in action.

[View Demo](https://github.com/JohnRogers/LarderLab)

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

Start with ForgeBreaker. It's the entry point and demonstrates how the pieces fit together. If MTG isn't your domain, LarderLab shows MCP-Gateway reuse in a different context.

---

## What This Architecture Enables

ForgeBreaker alone is sufficient to understand this system. The supporting services exist to demonstrate separation of concerns, not to imply future expansion. LarderLab exists specifically to prove that MCP-Gateway is reusable—not as a product in its own right.

Properties of the current design:

- **Service reuse**: MCP-Gateway serves both ForgeBreaker and LarderLab without modification
- **Independent deployment**: MLForge can be retrained and redeployed without touching application code
- **Horizontal scaling**: Each service scales according to its own resource profile

These are properties of the current design, not a roadmap.

---

## About Me

I build systems that work correctly under real-world conditions. My focus is on the intersection of traditional software engineering and AI/ML integration—specifically, how to build AI-augmented applications that remain testable, debuggable, and maintainable.

This portfolio represents my approach: start with a working domain application, extract shared concerns into services when there's a concrete reason, and ensure the system degrades gracefully when components are unavailable.

[LinkedIn](https://linkedin.com/in/johnrogers) | [Email](mailto:john@example.com)
