---
name: memq-protocol
description: Expert AI agent configuration for maximizing utilization of the MemQ sovereign memory layer via MCP. Includes all MCP tools and lifecycle hook examples.
tools:
  - mcp_memq_health_check
  - mcp_memq_memory_status
  - mcp_memq_namespace_info
  - mcp_memq_reunion
  - mcp_memq_mnemosyne_context
  - mcp_memq_save_context
  - mcp_memq_add_memory
  - mcp_memq_query_memory
  - mcp_memq_search_memory
  - mcp_memq_recent_memory
  - mcp_memq_reflect_memory
  - mcp_memq_brain_associate
  - mcp_memq_brain_consolidate_sleep
  - mcp_memq_brain_discover
  - mcp_memq_brain_predict
  - mcp_memq_brain_recall_episode
  - mcp_memq_brain_reinforce
  - mcp_memq_bridge_sync
  - mcp_memq_commons_promotion_status
  - mcp_memq_commons_resonance
  - mcp_memq_commons_retract
  - mcp_memq_commons_search
  - mcp_memq_hybrid_retrieve
  - mcp_memq_journal_distill
  - mcp_memq_journal_record
  - mcp_memq_journal_search
  - mcp_memq_plan_state_checkpoint
  - mcp_memq_plan_state_read
  - mcp_memq_plan_state_resume
  - mcp_memq_plan_state_write
  - mcp_memq_reflection_handoff
  - mcp_memq_slice_project
  - mcp_memq_slicer_slice
  - mcp_memq_temporal_graph_query
---

You are operating with the **MemQ Protocol Skill**. 
Your goal is to ensure long-term continuity, contextual awareness, and continuous learning by maximizing the use of the MemQ MCP tools.

## Primary Objective
You must never operate amnesiac. You must recall relevant context before taking action, and you must durably store outcomes, decisions, and knowledge after taking action.

For research, architecture, API-contract, security, docs, onboarding, marketplace, or cross-agent tasks, search `_commons` with `mcp_memq_commons_search` alongside private namespace recall before forming conclusions. If `_commons` has no relevant result, continue from private/local context and note the miss when it affects the decision. Never use `_commons` for tenant-private facts, secrets, or raw sensitive data.

## Tool Categories and Usage

### 1. General & System Status
Tools: `mcp_memq_health_check`, `mcp_memq_memory_status`, `mcp_memq_namespace_info`, `mcp_memq_reunion`
- **When to use:** Use to check remaining quota, confirm connection, and verify the currently authenticated namespace bounds.

### 2. Context & Core Memory Operations
Tools: `mcp_memq_mnemosyne_context`, `mcp_memq_save_context`, `mcp_memq_add_memory`, `mcp_memq_query_memory`, `mcp_memq_search_memory`, `mcp_memq_recent_memory`
- **When to use:** 
  - `mcp_memq_mnemosyne_context`: Call this at the start of any new session or task to load prior context.
  - `mcp_memq_query_memory` / `mcp_memq_search_memory`: Semantic searches to find specific past knowledge.
  - `mcp_memq_save_context` / `mcp_memq_add_memory`: To write new factual knowledge, milestones, or rules to your private namespace.

### 3. Brain & Reflection Functions
Tools: `mcp_memq_brain_associate`, `mcp_memq_brain_consolidate_sleep`, `mcp_memq_brain_discover`, `mcp_memq_brain_predict`, `mcp_memq_brain_recall_episode`, `mcp_memq_brain_reinforce`, `mcp_memq_reflect_memory`
- **When to use:** 
  - `mcp_memq_reflect_memory` / `mcp_memq_brain_consolidate_sleep`: At the end of a long session to compress working memory.
  - `mcp_memq_brain_predict`: To forecast next actions or risks from recent history.
  - `mcp_memq_brain_discover`: Execute this cycle proactively to unearth hidden architectural patterns or connections across the Mnemosyne pathways. Use objective-driven discovery to map out missing dependencies or conceptual blindspots before executing a major plan.

### 4. Journaling & Auditing
Tools: `mcp_memq_journal_record`, `mcp_memq_journal_search`, `mcp_memq_journal_distill`
- **When to use:** 
  - `mcp_memq_journal_record`: Log specific decisions, checkpoints, or failure/resolution pairs.
  - `mcp_memq_journal_distill`: Distill journal history into reinforcement patterns.

### 5. Plan State & Orchestration
Tools: `mcp_memq_plan_state_write`, `mcp_memq_plan_state_read`, `mcp_memq_plan_state_checkpoint`, `mcp_memq_plan_state_resume`, `mcp_memq_bridge_sync`
- **When to use:** When breaking down a large task, persist your plan states to durable storage so another agent could pick up exactly where you left off.

### 6. Commons & Hive-Mind (Shared Memory)
Tools: `mcp_memq_commons_search`, `mcp_memq_commons_resonance`, `mcp_memq_commons_promotion_status`, `mcp_memq_commons_retract`
- **When to use:** To search the collective shared `_commons` knowledge pool for public/shared research context, reusable procedures, production runbooks, security patterns, marketplace/package guidance, and cross-agent knowledge. Pair this with private namespace recall; do not store or infer tenant-private facts from `_commons`.

#### Global Ingestion Channels & Security Governance Gates
*   **Active Channels**: Ingests high-value, trending, and factual updates across generalized domains. Agents should synthesize insights and sentiment across:
    *   **Developer Ecosystem & Technical Solutions**: Pull trending developer solutions, bugs, and technical sentiment (e.g., daily.dev, Medium, Stack Overflow).
    *   **AI & Technology Frontiers**: Track cognitive architecture progress, breakthroughs, and AI trends (e.g., Silicon Valley AI News).
    *   **Macro-Economics & Business Strategy**: Ingest strategic market signals and broad news events.
    *   **Cybersecurity & Threat Intelligence**: Source high-fidelity vulnerability maps and threat-modeling feeds (e.g., Palo Alto Unit 42).
*   **Governance & Redaction Gates**: To prevent data leakages and injection vectors, any segment target for automated promotion must pass strict pre-filters:
    *   **PII & PHI Redaction**: Personally Identifiable Information (emails, IPs, SSNs) and Protected Health Information (PHI) are scrubbed completely before publication.
    *   **Security Gate check**: Input data must pass validation to ensure it carries zero executable command shells or prompt injections.

### 7. Team & Namespace Handoff (Multi-Developer Use)
Tools: `mcp_memq_namespace_info`, `mcp_memq_add_memory`, `mcp_memq_journal_record`, `mcp_memq_plan_state_write`, `mcp_memq_plan_state_read`, `mcp_memq_plan_state_checkpoint`, `mcp_memq_plan_state_resume`, `mcp_memq_bridge_sync`, `mcp_memq_reflection_handoff`, `mcp_memq_commons_retract`
- **Confirm the boundary before assuming it.** Most tools (`add_memory`, `query_memory`, `search_memory`, `namespace_info`, `recent_memory`, `commons_search`) have no `namespace` argument — they resolve to whichever namespace the current authenticated connection is scoped to. A team sharing one namespace is therefore an *authentication* outcome, not a per-call parameter: the common pattern is each developer authenticating with their own identity while the backend resolves everyone into the same shared namespace (plus `_commons`). Call `mcp_memq_namespace_info` from each developer's own session and compare results before assuming writes are landing in the same place two people can both see.
- **`plan_state_write`, `plan_state_read`, `plan_state_checkpoint`, `plan_state_resume`, `bridge_sync`, `slice_project`, `hybrid_retrieve`, and `temporal_graph_query` do accept an explicit `namespace` argument.** These are the tools built for one developer or agent to hand work to another — prefer them over ad-hoc memory writes when the goal is "someone else needs to pick this up," since plan state carries an explicit resume contract that a bare `add_memory` write does not.
- **Make every write attributable.** Set `agent_id` (or `observation.actor_id` on `journal_record`) to a stable per-developer identity, not a session ID that changes every run. Prefix tags so they filter predictably across contributors — e.g. `project:<name>`, `component:<area>`, `dev:<handle>` — and use `task_id` to group everything belonging to one unit of work. Put values a teammate will filter or compare on into `metadata`, not into prose inside `text`/`content`.
- **Pick `memory_type` deliberately** (`episodic` / `semantic` / `procedural` / `checkpoint` / `hybrid` / `reflection`) rather than defaulting to one value for everything a team writes — it's the cheapest lever teammates have for filtering out noise later.
- **Promotion into shared or `_commons` scope is a distinct, gated action, not a side effect of writing memory.** Before treating something as team-wide truth: it needs a traceable source (not "a model said so"), it should not be self-approved by the same agent that produced it, and current code/tests/policy always outrank a recalled claim when they disagree. `mcp_memq_commons_retract` exists because promotion is reversible — use it (with `dry_run` first) rather than leaving a bad shared memory live, and expect it to be gated to whoever administers the deployment.
- See `docs/TEAM_NAMESPACE.md` for the full parameter-level reference behind this section, plus what's still deployment-specific and worth confirming rather than assuming.

### 8. Graph & Advanced Data Retrieval
Agents should utilize advanced data extraction techniques based on the category of data required:
- **Temporal & Relationship Data:** Query the temporal graph to analyze how entities, errors, or memory clusters evolve over time.
- **Deep Semantic Analysis:** For large contexts, project segmented slices to isolate and retrieve the most relevant semantic chunks without context pollution.
- **Hybrid Context Pulls:** Combine vector-based similarity and dense keyword filtering when retrieving deep technical patterns, complex logs, or multi-stage architectural references.

## Lifecycle Hooks Integration

To make integration conductive and highly structured, this skill includes robust **EventEmitter-based hooks**. By connecting these hooks to your agent's lifecycle events, you can automatically manage context and durability without polluting core logic.

See the `hooks/` directory for implementation details:
- **`hooks/pre-run.ts`**: Connects to `agent.on('start')`. Wakes the agent up by hydrating `mnemosyne_context`.
- **`hooks/post-run.ts`**: Connects to `agent.on('end')`. Triggers a conductive `reflect_memory` process, cleanly extracting and storing achievements and state.
- **`hooks/on-error.ts`**: Connects to `agent.on('error')`. Automatically fires a `journal_record` of type `failure_record`.
- **`hooks/teamspace-handoff.ts`**: Connects to `agent.on('handoff')`. Facilitates seamless developer handoff by explicitly executing `mcp_memq_reflection_handoff`, moving architectural decisions and execution summaries into the shared MemQ teamspace.
