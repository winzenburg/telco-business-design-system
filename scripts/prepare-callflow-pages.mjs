import { cpSync, existsSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const sourceDir = resolve('apps/callflow');
const outputDir = resolve('callflow-pages');
const nestedDir = join(outputDir, 'callflow');

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
}

cpSync(sourceDir, outputDir, { recursive: true });
cpSync(sourceDir, nestedDir, { recursive: true });
