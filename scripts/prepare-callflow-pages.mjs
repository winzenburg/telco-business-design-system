import { cpSync, existsSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SERVER_ENDPOINT = 'http://127.0.0.1:7243/ingest/39aa3398-5279-48dc-a9ad-352e95fa7d81';

const log = (hypothesisId, location, message, data = {}) => {
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

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
  log('H1', 'prepare-callflow-pages.mjs:cleanup', 'Removed previous callflow-pages output', { outputDir });
}

cpSync(sourceDir, outputDir, { recursive: true });
log('H2', 'prepare-callflow-pages.mjs:copyRoot', 'Copied callflow site into output root', { sourceDir, outputDir });

const nestedDir = join(outputDir, 'callflow');
cpSync(sourceDir, nestedDir, { recursive: true });
log('H3', 'prepare-callflow-pages.mjs:copyNested', 'Duplicated callflow site under callflow/ path', { nestedDir, outputDir });
