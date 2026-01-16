#!/usr/bin/env node

/**
 * Figma Integration Setup Script
 * 
 * This script helps you set up Figma integration for your existing design system
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎨 Figma Integration Setup');
console.log('========================\n');

console.log('This will help you connect your existing Figma design system to Cursor.\n');

// Function to ask for input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setupFigma() {
  try {
    console.log('📋 Step 1: Get your Figma Access Token');
    console.log('1. Go to https://www.figma.com/settings');
    console.log('2. Navigate to Account → Personal access tokens');
    console.log('3. Click "Create new token"');
    console.log('4. Give it a name (e.g., "Design System Sync")');
    console.log('5. Copy the token\n');
    
    const accessToken = await askQuestion('Enter your Figma access token: ');
    
    console.log('\n📋 Step 2: Get your Figma File Key');
    console.log('1. Open your Figma design system file');
    console.log('2. Copy the file key from the URL');
    console.log('   Example: https://www.figma.com/file/XXXXX/Design-System → XXXXX is the file key\n');
    
    const fileKey = await askQuestion('Enter your Figma file key: ');
    
    // Create .env file
    const envContent = `# Figma Integration Configuration
FIGMA_ACCESS_TOKEN=${accessToken}
FIGMA_FILE_KEY=${fileKey}
`;
    
    const envPath = path.join(__dirname, '..', '.env');
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ Environment variables saved to .env file');
    console.log('\n📋 Step 3: Test the connection');
    console.log('Run this command to test your Figma connection:');
    console.log('npm run sync-figma\n');
    
    console.log('📋 Step 4: What will be extracted');
    console.log('The script will extract:');
    console.log('- Colors from frames, components, and styles');
    console.log('- Typography from text layers');
    console.log('- Spacing from layout and padding');
    console.log('- Component information');
    console.log('- Style information\n');
    
    console.log('🚀 Ready to sync! Run: npm run sync-figma');
    
  } catch (error) {
    console.error('❌ Error during setup:', error);
  } finally {
    rl.close();
  }
}

setupFigma(); 