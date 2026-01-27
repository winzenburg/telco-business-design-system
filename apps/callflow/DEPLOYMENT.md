## Call Flow Deployment Guide

### Release layout
Each release folder (for example `apps/callflow/june` or `apps/callflow/august`) must contain:
- a standalone `index.html` entry point,
- a `public/` directory with all associated assets (styles, scripts, images).

These folders are the source for both the root call-flow site and the `/june`, `/august` aliases that GitHub Pages publishes.

### How the artifact is built
`npm run prepare:callflow-pages` (executed by `.github/workflows/deploy-auto-attendant.yml`) now:
1. Reads the comma-separated `CALLFLOW_RELEASES` environment variable (defaults to `june,august`).
2. Copies each release folder into `callflow-pages/<release>`.
3. Mirrors the same release under `callflow-pages/callflow/<release>`.
4. Validates that both copies include `index.html` and the `public/` tree before allowing the workflow to continue.

If any release folder or required asset is missing, the script throws a clear error so the workflow stops before uploading the Pages artifact.

### GitHub Pages workflow
- Triggers on pushes to `main` that touch `apps/callflow/**`.
- Runs `npm run prepare:callflow-pages` with `CALLFLOW_RELEASES: june,august`.
- Uploads `callflow-pages/` as the Pages artifact.
- Deploys the artifact from `callflow-pages/` so `/june/` and `/august/` resolve to their respective releases.

### Adding a new release
1. Create the new release directory under `apps/callflow/<new-release>`.
2. Ensure it ships a reliable `index.html` and copies all static assets into a `public/` directory.
3. Update the workflow step `CALLFLOW_RELEASES` value to include the new folder (comma-separated).
4. Confirm `npm run prepare:callflow-pages` succeeds locally and that the release is visible at both the root (`callflow-pages/<release>/`) and nested (`callflow-pages/callflow/<release>/`) targets before pushing.
