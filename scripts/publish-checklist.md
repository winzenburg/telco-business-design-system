# NPM Publishing Checklist

## Prerequisites
- [ ] NPM account with publishing permissions
- [ ] Added NPM_TOKEN to GitHub repository secrets
- [ ] Package name `@comcast/comcast-business-design-system` is available or owned
- [ ] All tests passing
- [ ] Bundle size within budget (<200KB, <50KB gzipped)

## Manual Publishing Process

### 1. Login to NPM
```bash
npm login
```

### 2. Verify package configuration
```bash
npm run build
npm pack --dry-run
```

### 3. Publish (first time)
```bash
npm publish --access public
```

### 4. Subsequent releases
```bash
npm version patch  # or minor/major
npm publish
```

## Automated Publishing (Recommended)

### Setup
1. Add NPM_TOKEN to GitHub secrets:
   - Go to GitHub repo → Settings → Secrets → Actions
   - Add `NPM_TOKEN` with your NPM automation token

2. Use GitHub workflow:
   - **Auto**: Create a GitHub release to trigger publishing
   - **Manual**: Go to Actions → "Publish to NPM" → Run workflow

### Version Strategy
- **Patch**: Bug fixes, documentation updates
- **Minor**: New components, features (backward compatible)
- **Major**: Breaking changes, API changes

## Post-Publication
- [ ] Verify package on npmjs.com
- [ ] Test installation: `npm install @comcast/comcast-business-design-system`
- [ ] Update documentation with installation instructions
- [ ] Announce to team/users

## Rollback Process
If issues are found after publishing:
```bash
npm unpublish @comcast/comcast-business-design-system@<version> --force
```
**Warning**: Only use within 72 hours and if no one is using the version.