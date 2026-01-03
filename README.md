# John Rogers — Portfolio

## About Me

I've been building, fixing, and thinking about systems for most of my working life — not just software systems, but real ones: organisations, processes, products, and teams across a range of industries.

Software engineering is where those interests have converged most strongly for me. I enjoy work that sits at the intersection of practical problem-solving and careful design: understanding how something behaves in the real world, where it breaks down, and how to make it simpler, more robust, or easier to reason about.

This portfolio reflects that mindset. Rather than a collection of disconnected projects, it's organised around a small set of ideas I care about:

- building systems rather than demos,
- separating infrastructure from domain logic,
- and being honest about trade-offs instead of hiding them behind abstraction.

Outside of software, I have broad interests — games (both digital and tabletop), science, current affairs, music, cooking, and health — and I've found that those interests tend to inform how I think about engineering. Good systems, like good recipes or good games, balance structure with flexibility and reward thoughtful constraints.

I'm not particularly interested in chasing trends or novelty for its own sake. I care more about clarity, longevity, and reuse, which is why many of the projects here focus on infrastructure and composition rather than one-off features.

---

## How This Portfolio Is Structured

This repository is a narrative and presentation layer for a small system of related projects. The goal isn't to show as many technologies as possible, but to show how a few ideas hold up when applied consistently.

At a high level, the work is organised around:

- one primary, domain-specific application,
- a couple of reusable infrastructure services,
- and a second, intentionally lightweight application used to validate those abstractions.

The emphasis is on system boundaries, not feature lists.

---

## The System at a Glance

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              ForgeBreaker                                   │
│                   (Domain Application — MTG Deck Analysis)                  │
│                                                                             │
│        Deterministic Analysis  +  ML Inference  +  LLM Tool Usage           │
└───────────────────────┬─────────────────────────────────┬───────────────────┘
                        │                                 │
                        ▼                                 ▼
             ┌──────────────────┐               ┌──────────────────┐
             │     MLForge      │               │   MCP-Gateway    │
             │  (ML Inference)  │               │  (Tool Routing)  │
             └──────────────────┘               └────────┬─────────┘
                                                         │
                                                         ▲
                                              ┌──────────┴─────────┐
                                              │     LarderLab      │
                                              │    (Reuse Demo)    │
                                              └────────────────────┘
```

At the centre of the system is **MCP-Gateway**, a small service that handles LLM tool orchestration in a deterministic, explicit way. It exists to separate "how tools are exposed and invoked" from any particular application or domain.

Two different applications make use of that same infrastructure:

- **ForgeBreaker**, a complex, domain-heavy application in the Magic: The Gathering space
- **LarderLab**, a deliberately simple application in an unrelated domain (food and ingredients)

Both applications register tools with MCP-Gateway and interact with it in the same way. The difference between them is not infrastructure, but domain complexity.

That distinction is intentional.

---

## Why This Structure?

This separation reflects how I think production systems should actually ship:

| Concern | Repository | Rationale |
|---------|------------|-----------|
| Domain logic | ForgeBreaker | Application-specific; changes frequently |
| Model inference | MLForge | Different deployment cadence; GPU/resource requirements differ |
| Tool orchestration | MCP-Gateway | Shared infrastructure; multiple consumers |
| Reuse validation | LarderLab | Proves MCP-Gateway works outside MTG domain |

I considered single-repo alternatives and rejected them. A monorepo couples deployment and testing; library extraction doesn't provide enough isolation. Separate services mean clear contracts, independent scaling, and graceful degradation when dependencies are unavailable.

---

## Projects

### ForgeBreaker

ForgeBreaker is the flagship application in this portfolio.

It's a Magic: The Gathering deck analysis and exploration tool, built as a real system rather than a toy problem. The domain is complicated, opinionated, and full of edge cases, which makes it a good stress-test for architectural decisions.

ForgeBreaker is where most of the complexity lives: domain logic, analysis pipelines, integration with external services, and non-trivial failure modes.

It uses MCP-Gateway for LLM tool orchestration and can optionally integrate with MLForge for model-based inference. A curated sample deck is provided so that new users can explore the system without needing their own collection.

ForgeBreaker is not meant to be "clever". It's meant to be understandable, inspectable, and honest about where automation helps and where it doesn't.

[View Repository](https://github.com/JohnRogers/ForgeBreaker)

---

### LarderLab

LarderLab is intentionally small.

It's a simple application that lets users ask questions about ingredients and basic recipes. There are no accounts, no personalization, and no attempt to turn it into a full product.

Its purpose is very specific: to demonstrate that MCP-Gateway is genuinely reusable infrastructure, not something tightly coupled to ForgeBreaker or to the Magic domain.

LarderLab uses the same gateway, the same tool registration model, and the same interaction patterns — just applied to a completely different problem space.

A small public demo is available for people who want to see the system work without touching Magic: The Gathering.

[View Repository](https://github.com/JohnRogers/LarderLab)

---

### MCP-Gateway

MCP-Gateway is a small, focused service that handles LLM tool orchestration.

It's responsible for tool registration, schema validation, deterministic tool invocation, and normalised error handling. It does not contain business logic, domain knowledge, or application state. Those concerns are intentionally pushed out to consuming applications.

This service started as an experiment, but became infrastructure once it proved useful in more than one place. Its current form reflects that shift.

[View Repository](https://github.com/JohnRogers/MCP-Gateway)

---

### MLForge

MLForge is a generic model-serving service, designed to be usable independently of any specific application.

It handles model loading, inference requests, and basic operational concerns around serving ML models. ForgeBreaker can use MLForge for certain analysis paths, but it is not required.

MLForge does not depend on MCP-Gateway, and MCP-Gateway does not depend on MLForge. The services are intentionally orthogonal.

[View Repository](https://github.com/JohnRogers/MLForge)

---

## Design Philosophy

A few themes run through all of these projects:

- **Clear boundaries matter more than clever abstractions.** Every service exists because there's a concrete reason to deploy it separately, not because separation seemed like a good idea in the abstract.

- **Reusability should be proven, not promised.** MCP-Gateway is infrastructure because two different applications actually use it. LarderLab exists specifically to validate that claim.

- **Graceful degradation by default.** Every integration point has a fallback. Partial functionality beats total failure. If MLForge is unavailable, ForgeBreaker still works — the AI features enhance, they don't gate.

- **Demo-ability matters.** A reviewer should be able to see the system work without environment setup. Sample data and public demos exist for that reason.

---

## How to Review This Portfolio

**5 minutes:**
Visit ForgeBreaker and run the sample deck demo. Note how results include both deterministic and AI-generated insights.

**15 minutes:**
Review ForgeBreaker's architecture documentation. Trace how it calls MLForge and MCP-Gateway. Observe the fallback behavior when services are unavailable.

**30+ minutes:**
Clone ForgeBreaker and run locally. Review MLForge's model serving implementation. Review MCP-Gateway's tool registration flow.

Start with ForgeBreaker — it's the entry point and shows how the pieces fit together. If MTG isn't your domain, LarderLab shows MCP-Gateway reuse in a different context.

---

## Contact

[LinkedIn](https://linkedin.com/in/johnrogers) | [Email](mailto:john@example.com)
