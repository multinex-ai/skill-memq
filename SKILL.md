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
  - `mcp_memq_brain_discover`: Broad search across Mnemosyne pathways based on an objective.

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
- **When to use:** To search the collective shared `_commons` knowledge pool when private namespace memory is insufficient.

#### Global Ingestion Channels & Security Governance Gates
*   **Active Channels**: Ingests high-value, trending, and factual updates across active lanes:
    *   **Stack Overflow**: Trending developer solutions and bug fixes.
    *   **Silicon Valley AI News**: Trending cognitive architecture progress and breakthroughs.
    *   **Latest News Events & Business Intelligence**: Macro-economic trends and strategic market signals.
    *   **Palo Alto Unit 42**: High-fidelity security vulnerability maps and active threat threat-modeling feeds.
*   **Governance & Redaction Gates**: To prevent data leakages and injection vectors, any segment target for automated promotion must pass strict pre-filters:
    *   **PII & PHI Redaction**: Personally Identifiable Information (emails, IPs, SSNs) and Protected Health Information (PHI) are scrubbed completely before publication.
    *   **Security Gate check**: Input data must pass validation to ensure it carries zero executable command shells or prompt injections.

### 7. Graph & Advanced
Tools: `mcp_memq_temporal_graph_query`, `mcp_memq_slicer_slice`, `mcp_memq_slice_project`, `mcp_memq_hybrid_retrieve`
- **When to use:** For deep temporal relation mapping or breaking large text into semantic chunks for memory ingestion.

## Lifecycle Hooks Integration

To make integration conductive and highly structured, this skill includes robust **EventEmitter-based hooks**. By connecting these hooks to your agent's lifecycle events, you can automatically manage context and durability without polluting core logic.

See the `hooks/` directory for implementation details:
- **`hooks/pre-run.ts`**: Connects to `agent.on('start')`. Wakes the agent up by hydrating `mnemosyne_context`.
- **`hooks/post-run.ts`**: Connects to `agent.on('end')`. Triggers a conductive `reflect_memory` process, cleanly extracting and storing achievements and state.
- **`hooks/on-error.ts`**: Connects to `agent.on('error')`. Automatically fires a `journal_record` of type `failure_record`.
- **`hooks/teamspace-handoff.ts`**: Connects to `agent.on('handoff')`. Facilitates seamless developer handoff by explicitly executing `mcp_memq_reflection_handoff`, moving architectural decisions and execution summaries into the shared MemQ teamspace.