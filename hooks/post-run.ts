/**
 * Post-Run Hook for MemQ Integration
 *
 * Automatically consolidates the agent's working memory into durable long-term storage
 * at the end of an execution cycle. Conductive configuration allows specifying the window
 * or forcing a full context reflection.
 */

export interface PostRunOptions {
  session_id?: string;
  force_reflection?: boolean;
  window_size?: number;
}

export function setupPostRunHook(agent: any, mcpClient: any, options: PostRunOptions = {}) {
  agent.on('end', async (executionSummary: string) => {
    try {
      console.log(`[MemQ] Consolidating memory for session ${options.session_id || 'default'}...`);

      // 1. Save the immediate execution summary as a checkpoint
      await mcpClient.callTool('mcp_memq_save_context', {
        kind: 'checkpoint',
        content: `Execution completed: ${executionSummary}`,
        session_id: options.session_id,
        tags: ['auto-checkpoint', 'post-run']
      });

      // 2. Trigger memory reflection to distill insights from the recent window
      const reflectResult = await mcpClient.callTool('mcp_memq_reflect_memory', {
        session_id: options.session_id,
        force: options.force_reflection ?? false,
        window: options.window_size ?? 10
      });

      console.log(`[MemQ] Memory reflection complete. Distilled ${reflectResult?.insights_generated || 0} new insights.`);
    } catch (error) {
      console.error(`[MemQ] Failed to consolidate memory during post-run:`, error);
    }
  });
}
