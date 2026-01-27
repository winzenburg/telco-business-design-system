import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
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
  // Only attempt fetch in local development (skip in CI)
  if (process.env.CI !== 'true') {
    fetch(SERVER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  }
  // #endregion
};

const sourceDir = resolve('apps/callflow');
const outputDir = resolve('callflow-pages');
const nestedDir = join(outputDir, 'callflow');

const parseReleaseList = () => {
  const envValue = process.env.CALLFLOW_RELEASES;
  if (envValue) {
    const parsed = envValue
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);
    if (parsed.length > 0) {
      return parsed;
    }
  }
  return ['august', 'june'];
};

const releaseList = parseReleaseList();

const ensureReleaseSource = (release) => {
  const sourcePath = join(sourceDir, release);
  if (!existsSync(sourcePath)) {
    throw new Error(`Release folder missing under apps/callflow: ${release}`);
  }
  return sourcePath;
};

const ensureArtifact = (targetDir, release, stage) => {
  const missing = [];
  if (!existsSync(join(targetDir, 'index.html'))) {
    missing.push('index.html');
  }
  if (!existsSync(join(targetDir, 'public'))) {
    missing.push('public/');
  }
  if (missing.length) {
    throw new Error(
      `Release \"${release}\" is missing ${missing.join(
        ', '
      )} under ${stage} target (${targetDir})`
    );
  }
};

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
  logEntry('H1', 'prepare-callflow-pages.mjs:cleanup', 'Removed existing callflow-pages directory', { outputDir });
}

mkdirSync(outputDir, { recursive: true });
mkdirSync(nestedDir, { recursive: true });

// Copy root index.html for GitHub Pages base URL
const rootIndexSource = join(sourceDir, 'index.html');
if (existsSync(rootIndexSource)) {
  cpSync(rootIndexSource, join(outputDir, 'index.html'));
  logEntry('H1.5', 'prepare-callflow-pages.mjs:copy-root-index', 'Copied root index.html', { rootIndexSource });
}

// Copy .nojekyll to disable Jekyll processing on GitHub Pages
const nojekyllSource = join(sourceDir, '.nojekyll');
if (existsSync(nojekyllSource)) {
  cpSync(nojekyllSource, join(outputDir, '.nojekyll'));
  logEntry('H1.6', 'prepare-callflow-pages.mjs:copy-nojekyll', 'Copied .nojekyll file', { nojekyllSource });
}

logEntry('H2', 'prepare-callflow-pages.mjs:copy-start', 'Copying release folders', { releaseList, outputDir });

releaseList.forEach((release) => {
  const releaseSource = ensureReleaseSource(release);

  const rootTarget = join(outputDir, release);
  cpSync(releaseSource, rootTarget, { recursive: true });
  ensureArtifact(rootTarget, release, 'root');
  logEntry('H3', 'prepare-callflow-pages.mjs:copy-release-root', 'Copied release to root target', {
    release,
    rootTarget
  });

  const nestedTarget = join(nestedDir, release);
  mkdirSync(nestedTarget, { recursive: true });
  cpSync(releaseSource, nestedTarget, { recursive: true });
  ensureArtifact(nestedTarget, release, 'nested');
  logEntry('H4', 'prepare-callflow-pages.mjs:copy-release-nested', 'Copied release to nested target', {
    release,
    nestedTarget
  });
});

logEntry('H5', 'prepare-callflow-pages.mjs:copy-end', 'Finished copying releases', {
  releaseList,
  outputDir
});
