/**
 * On-Error Hook for MemQ Integration
 *
 * Automatically intercepts agent errors and crashes, persisting them to the Soul Journal
 * as failure records. This ensures future agents can query and avoid known failures.
 */

export function setupOnErrorHook(agent: any, mcpClient: any, options: { session_id?: string } = {}) {
  agent.on('error', async (error: Error, contextData?: any) => {
    try {
      console.error(`[MemQ] Intercepted agent error. Writing failure record to journal...`);

      const errorContent = `
        Error Name: ${error.name}
        Error Message: ${error.message}
        Stack Trace: ${error.stack}
        Context: ${JSON.stringify(contextData || {})}
      `;

      await mcpClient.callTool('mcp_memq_journal_record', {
        type: 'failure_record',
        content: errorContent,
        session_id: options.session_id,
        tags: ['error', 'auto-captured', 'agent-crash'],
        observation: {
          outcome: 'failure',
          reward_signal: 'avoid'
        }
      });

      console.log(`[MemQ] Failure record durably persisted. Future sessions will avoid this pattern.`);
    } catch (journalError) {
      console.error(`[MemQ] Critical failure: Unable to record error to MemQ Journal.`, journalError);
    }
  });
}
