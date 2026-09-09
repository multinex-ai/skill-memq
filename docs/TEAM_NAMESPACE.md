# Team & namespace reference

The deeper reference behind `SKILL.md`'s "Team & Namespace Handoff" section —
read this when you need an exact parameter name, or when deciding how a team
of developers/agents should share one MemQ namespace without corrupting each
other's work. `SKILL.md` states the behavior; this file states the evidence
and the open questions behind it.

## What's true of the tool surface itself

Verified directly from the `mcp_memq_*` tool schemas (parameter shapes, not
inferred from names):

- `add_memory`, `query_memory`, `search_memory`, `namespace_info`,
  `recent_memory`, and `commons_search` take **no `namespace` parameter**.
  They operate on "the authenticated [private] memory namespace" — the
  namespace is a property of the connection's identity, not something a call
  chooses.
- `plan_state_write`, `plan_state_read`, `plan_state_checkpoint`,
  `plan_state_resume`, `bridge_sync`, `slice_project`, `hybrid_retrieve`, and
  `temporal_graph_query` **do** take an explicit `namespace` string. These are
  also the tools whose own descriptions frame them around handoff and
  resumption by a different actor than the one who wrote the state.
- `add_memory` and `journal_record` carry `agent_id` / `actor_id`, `tags`,
  `task_id`, and `metadata` — the fields available for attributing and
  filtering a multi-contributor namespace.
- `memory_type` is a fixed enum everywhere it appears:
  `episodic | semantic | procedural | checkpoint | hybrid | reflection`.
- `commons_retract` is admin-gated and supports `dry_run`; treat any
  `_commons` retraction as a reversible-but-audited action, not a quiet
  delete.

## The shape of "many developers, one namespace" in practice

A single shared *secret* is not the only way to get a shared namespace, and
usually isn't the right one for a team. The pattern that holds up:

1. Each developer authenticates with their **own** identity (their own OAuth
   sign-in or their own seat credential).
2. The backend resolves that identity into the namespace(s) it's authorized
   for — typically a shared org/team namespace plus `_commons`, rather than
   an unscoped or purely private one.
3. Every developer confirms this independently with `namespace_info` rather
   than assuming it — two developers seeing different namespace boundaries
   means they are not actually collaborating through the tools that lack an
   explicit `namespace` argument, no matter how identical their setup looks.
4. Non-interactive / CI use gets its own credential (an org-level key), never
   an individual developer's or an unscoped internal one — mixing those is
   how a pipeline ends up reading or writing the wrong namespace silently.

This is a configuration/authentication decision made once per deployment, not
something `SKILL.md`'s guidance can enforce on its own — confirm it with
whoever administers the MemQ deployment before assuming a team is actually
sharing a namespace.

## Write attribution, concretely

| Field | Use it for |
|---|---|
| `agent_id` / `observation.actor_id` | A stable per-developer or per-agent identity — an email, a fixed handle, never a session ID that changes each run. |
| `tags` | Prefixed, filterable groupings: `project:<name>`, `component:<area>`, `dev:<handle>`, plus free-form topic tags. |
| `task_id` | Everything belonging to one unit of work, so a teammate can pull the full set with one filtered query. |
| `memory_type` | A deliberate choice from the enum, not a default — `episodic` for "this happened," `semantic` for "this is durably true," `procedural` for "here's how," `checkpoint` for a resumable snapshot. |
| `metadata` | Structured values a teammate will filter, compare, or join on later (ticket IDs, versions, environments) — not prose. |

`add_memory`'s own dedup/reconciliation is content-similarity based; it will
not reliably catch two developers recording the same fact under different
tags or phrasing. A quick `query_memory` before writing is cheap insurance
against three people independently recording the same discovery three ways.

## Promotion into shared scope: a gate, not a side effect

Treat moving something from private/working memory into a team namespace or
`_commons` as its own reviewed step, separate from the write that created it:

- It needs a traceable source — a locator, a revision, or a reproducible
  verification step — not just a model's assertion.
- The agent or developer that produced the candidate should not be the sole
  approver of promoting it into shared scope other people will trust.
- Current code, tests, and policy outrank a recalled claim whenever they
  disagree — memory accelerates work, it does not outrank verification.
- Retraction (`commons_retract`) should remove a bad record from active
  recall while preserving why it was retracted — that's what the tool's
  tombstone/audit behavior is for. Use `dry_run` first.

## Open questions — confirm per deployment, don't assume

- Whether write-time dedup is strong enough to catch near-duplicate facts
  phrased differently by different contributors — not independently verified
  here, only described in the tool's own summary.
- Latency/consistency behavior under concurrent writes from many developers
  at once — an operational question worth testing directly if write volume
  is high, not something schema introspection answers.
- Who holds "admin" for `commons_retract` in your deployment — not exposed
  by the tool schemas themselves.

If new information changes any of the above for your deployment, update this
file rather than letting the correction live only in one person's head.
