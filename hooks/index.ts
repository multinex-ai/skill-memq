export * from './pre-run.js';
export * from './post-run.js';
export * from './on-error.js';
export * from './teamspace-handoff.js';

import { setupPreRunHook } from './pre-run.js';
import { setupPostRunHook } from './post-run.js';
import { setupOnErrorHook } from './on-error.js';
import { setupTeamspaceHandoffHook } from './teamspace-handoff.js';

/**
 * Highly conductive unified setup for MemQ agent integration.
 * Attaches all essential memory lifecycle events to the agent.
 */
export function setupMemQHooks(agent: any, mcpClient: any, options: { session_id?: string, namespace?: string } = {}) {
  setupPreRunHook(agent, mcpClient, options);
  setupPostRunHook(agent, mcpClient, options);
  setupOnErrorHook(agent, mcpClient, options);
  setupTeamspaceHandoffHook(agent, mcpClient, options);
}
