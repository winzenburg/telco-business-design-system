#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all story files
const storyFiles = glob.sync('stories/*.stories.tsx');

console.log(`Found ${storyFiles.length} story files`);

let updatedCount = 0;

storyFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Check if file has AllVariants export
  if (!content.includes('export const AllVariants')) {
    return;
  }

  // Check if already has the parameters
  if (content.includes('AllVariants: Story = {\n  parameters: {')) {
    console.log(`✓ ${path.basename(file)} - already has source parameters`);
    return;
  }

  // Add parameters to AllVariants story
  // Match: export const AllVariants: Story = {
  //   render: () => (
  const pattern = /(export const AllVariants: Story = \{)\n(\s+render: \(\) => \()/;

  if (content.match(pattern)) {
    content = content.replace(
      pattern,
      `$1\n  parameters: {\n    docs: {\n      source: {\n        type: 'code'\n      }\n    }\n  },\n$2`
    );

    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`✓ Updated ${path.basename(file)}`);
  } else {
    console.log(`⚠ Skipped ${path.basename(file)} - pattern not found`);
  }
});

console.log(`\n✅ Updated ${updatedCount} files`);
