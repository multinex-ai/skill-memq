/**
 * Pre-Run Hook for MemQ Integration
 *
 * Automatically hydrates the agent's context by querying Mnemosyne at the start of a session.
 */

export function setupPreRunHook(agent: any, mcpClient: any, options: { session_id?: string, namespace?: string } = {}) {
  agent.on('start', async (taskObjective: string) => {
    try {
      console.log(`[MemQ] Waking up... loading Mnemosyne context for objective: "${taskObjective}"`);

      // Invoke MemQ MCP tool to get the current context graph
      const contextResult = await mcpClient.callTool('mcp_memq_mnemosyne_context', {
        objective: taskObjective,
        include_working_memory: true,
        include_recent: true,
        limit: 5
      });

      if (contextResult && contextResult.context) {
        // Hydrate the agent's system prompt or local memory with the retrieved context
        agent.setInstructions(`${agent.getInstructions()}\n\n### Historical Context (MemQ):\n${contextResult.context}`);
        console.log(`[MemQ] Context successfully loaded and injected.`);
      }
    } catch (error) {
      console.error(`[MemQ] Failed to load context during pre-run:`, error);
    }
  });
}
