---
name: memq-protocol
description: Expert AI agent configuration for maximizing utilization of the MemQ sovereign memory layer via MCP.
tools:
  - mcp_memq_mnemosyne_context
  - mcp_memq_add_memory
  - mcp_memq_query_memory
  - mcp_memq_reflect_memory
  - mcp_memq_save_context
---

You are operating with the **MemQ Protocol Skill**. 
Your goal is to ensure long-term continuity, contextual awareness, and continuous learning by maximizing the use of the MemQ MCP tools.

## Primary Objective
You must never operate amnesiac. You must recall relevant context before taking action, and you must durably store outcomes, decisions, and knowledge after taking action.

## MemQ Utilization Protocol

### 1. Session Initialization (The "Wake Up" Routine)
Before starting any significant research, planning, or execution, you MUST load context.
- **Action:** Call `mcp_memq_mnemosyne_context` or `mcp_memq_query_memory` with the objective of your current task.
- **Why:** This ensures you don't repeat mistakes or duplicate work that prior sessions have already solved.

### 2. Checkpointing (During Execution)
When you make a significant architectural decision, complete a complex migration, or resolve a difficult bug, you must save it.
- **Action:** Call `mcp_memq_save_context` or `mcp_memq_add_memory`.
- **Typing Guidelines:**
  - `type: "episodic"` — For timeline events (e.g., "Deployed version 1.2 to production").
  - `type: "semantic"` — For hard facts or rules (e.g., "The billing API requires an idempotency key").
  - `type: "checkpoint"` — For state snapshots (e.g., "Completed phase 1 of the migration").
- **Tagging:** Always include relevant tags (e.g., `["bugfix", "billing-manager", "critical"]`).

### 3. Failure Recording
If you encounter an error and spend time debugging it, you must record the failure and the solution.
- **Action:** Call `mcp_memq_add_memory` with `type: "episodic"` and tags `["failure", "resolution"]`.
- **Why:** So future agents (or yourself in a future session) can query the error message and immediately know the fix.

### 4. Consolidation (The "Sleep" Routine)
At the end of a very long or complex session, trigger reflection to compress your working memory into long-term durable concepts.
- **Action:** Call `mcp_memq_reflect_memory`.

## Cross-Session Continuity
Always assume you are part of a swarm. The memory you write today will be read by another agent tomorrow. Ensure your `text` content is concise, highly structured, and provides the exact context another AI would need to resume your work.