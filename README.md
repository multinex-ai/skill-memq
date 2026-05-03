# Multinex Skill: MemQ Protocol 🧠

[![NPM Version](https://img.shields.io/npm/v/@multinex/skill-memq.svg)](https://npmjs.com/package/@multinex/skill-memq)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](https://opensource.org/licenses/MIT)

**Expert AI agent configuration for maximizing utilization of the MemQ sovereign memory layer.**

This repository contains the official Multinex AI "Skill" configuration for the MemQ Protocol. It is designed to be injected into an LLM's context window to instantly equip it with the behavioral patterns required to intelligently interact with the MemQ MCP tools (Mnemosyne context, associative recall, and reflection).

## Quick Start

To equip your AI agent with this skill, instruct your LLM to read the `SKILL.md` file, or install the package:

```bash
npm install @multinex/skill-memq
```

Then in your agent setup:
```typescript
import fs from 'fs';
import path from 'path';

// Load the skill instructions into the system prompt
const memqSkill = fs.readFileSync(
  path.resolve('./node_modules/@multinex/skill-memq/SKILL.md'), 
  'utf-8'
);

const systemPrompt = `You are an AI Agent. Adopt the following skill:\n\n${memqSkill}`;
```

## LLM Inference (`llms.txt`)

This repository fully supports the `llms.txt` standard. LLMs can directly infer the capabilities of this skill by reading the [`llms.txt`](./llms.txt) file at the root of this repository.

## Features
- **Session Initialization:** Instructs the agent to query MemQ context before starting work.
- **Semantic vs Episodic Rules:** Provides clear guidelines on when to store facts vs. events.
- **Failure Recording:** Mandates that the agent logs debugging resolutions to prevent future amnesia.

---
*Built with precision by the [Multinex AI](https://multinex.ai) Engineering Team.*