# John Rogers – Engineering Portfolio

I've been building, fixing, and thinking about systems for most of my working life — not just software systems, but real ones: organisations, processes, products, and teams across a range of industries.

Software engineering is where those interests have converged most strongly for me. I enjoy work that sits at the intersection of practical problem-solving and careful design: understanding how something behaves in the real world, where it breaks down, and how to make it simpler, more robust, or easier to reason about.

Outside of software, I have broad interests — games (both digital and tabletop), science, current affairs, music, cooking, and health — and I've found that those interests tend to inform how I think about engineering. Good systems, like good recipes or good games, balance structure with flexibility and reward thoughtful constraints.

I'm not particularly interested in chasing trends or novelty for its own sake. I care more about clarity, longevity, and reuse, which is why many of the projects here focus on infrastructure and composition rather than one-off features.

---

This repository is an index and narrative wrapper around a small set of related projects I've built while exploring backend systems, ML-backed services, and service boundaries. The goal is not to present a polished product suite, but to make my design thinking, tradeoffs, and execution style legible.

Nothing here is intended as a startup pitch. Some parts are complete, some are exploratory, and some exist mainly to support learning or future work. Where something is unfinished or aspirational, I try to say so plainly.

---

## What Actually Exists Today

There is one complete, end-to-end system in this portfolio:

**ForgeBreaker ↔ MLForge**

That integration is real, exercised in code, and central to how ForgeBreaker works. Everything else in this portfolio should be read as supporting work, experiments, or scaffolding around that core.

---

## Repositories

### ForgeBreaker

ForgeBreaker is the primary project.

It is a backend service for assisting with Magic: The Gathering deck construction and analysis. It handles:

- domain modeling and rules
- orchestration of LLM calls
- budget and rate controls
- persistence and caching
- integration with a separate ML inference service

ForgeBreaker is intentionally opinionated and fairly complete. It has tests, CI, and documentation because it's the project where I spent the most time validating ideas end-to-end.

Importantly: ForgeBreaker directly integrates with MLForge for model-backed inference. That boundary is real and exercised.

[View Repository](https://github.com/JohnRogers/ForgeBreaker)

---

### MLForge

MLForge is a standalone model-serving backend.

It is responsible for:

- loading and validating trained models
- handling inference requests
- managing caching and async execution
- enforcing invariants around model readiness

MLForge exists because I wanted a clean separation between application logic and model-serving concerns. It is used by ForgeBreaker today and is not hypothetical.

[View Repository](https://github.com/JohnRogers/MLForge)

---

### MCP-Gateway

MCP-Gateway is an experimental service.

It explores a tool-execution boundary based on JSON-RPC / MCP-style interactions. The intent is to understand what it would take to move tool execution behind a dedicated service boundary rather than embedding it directly in an application.

At present, MCP-Gateway is not used by ForgeBreaker.

It stands on its own as an exploration of protocol shape, request handling, and execution context modeling. It should be read as a design experiment, not as integrated infrastructure.

I built MCP-Gateway to explore what it would take to externalize tool execution, but I deliberately stopped short of integrating it once I realized the complexity tradeoff wasn’t justified yet.


[View Repository](https://github.com/JohnRogers/MCP-Gateway)

---

### LarderLab

LarderLab is the least mature project in the set.

It started as a sandbox for experimenting with service interactions and data flow, and it currently does not validate or exercise the other services in a meaningful way. There is no claim that it is production-quality or even complete.

If anything, it reflects ideas I was exploring rather than conclusions I've reached.

[View Repository](https://github.com/JohnRogers/LarderLab)

---

## How to Read This Portfolio

If you're reviewing this as a hiring manager or engineer:

- Treat **ForgeBreaker + MLForge** as the core signal.
- Treat **MCP-Gateway** as a protocol and architecture experiment.
- Treat **LarderLab** as an unfinished lab space, not a product.

I'm more interested in being precise about what exists than in presenting a perfectly unified story. Some connections are real, some are aspirational, and some are simply ideas I haven't finished testing yet.

---

## AI Assistance

This portfolio was developed with assistance from Claude (Anthropic). AI was used for code generation, architectural discussion, documentation drafting, and debugging. I reviewed, edited, and tested all outputs.

---

## Contact

[LinkedIn](https://linkedin.com/in/johnrogers) | [Email](mailto:john@example.com)
