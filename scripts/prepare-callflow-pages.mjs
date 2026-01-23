import { cpSync, existsSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SERVER_ENDPOINT = 'http://127.0.0.1:7243/ingest/39aa3398-5279-48dc-a9ad-352e95fa7d81';

const logEntry = (hypothesisId, location, message, data = {}) => {
  const payload = {
    sessionId: 'debug-session',
    runId: 'prepare-callflow-pages',
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now()
  };
  // #region agent log
  fetch(SERVER_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {});
  // #endregion
};

const sourceDir = resolve('apps/callflow');
const outputDir = resolve('callflow-pages');
const nestedDir = join(outputDir, 'callflow');

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
  logEntry('H1', 'prepare-callflow-pages.mjs:cleanup', 'Removed existing callflow-pages directory', { outputDir });
}

logEntry('H2', 'prepare-callflow-pages.mjs:copyRoot-start', 'Beginning root copy', { sourceDir, outputDir });
cpSync(sourceDir, outputDir, { recursive: true });
logEntry('H3', 'prepare-callflow-pages.mjs:copyRoot-end', 'Finished root copy', { sourceDir, outputDir });

logEntry('H4', 'prepare-callflow-pages.mjs:copyNested-start', 'Beginning nested copy', { nestedDir });
cpSync(sourceDir, nestedDir, { recursive: true });
logEntry('H5', 'prepare-callflow-pages.mjs:copyNested-end', 'Nested callflow ready', { nestedDir, outputDir });
