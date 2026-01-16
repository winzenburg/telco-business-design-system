#!/usr/bin/env node

/**
 * Content Refinement Script using Claude Opus 4.5
 * 
 * This script uses the Anthropic API to refine content with Claude Opus 4.5
 */

require('dotenv').config({ path: '.env.local' });
const https = require('https');

// Configuration
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-opus-4-20250514'; // Claude Opus 4.5

if (!ANTHROPIC_API_KEY) {
  console.error('❌ Error: ANTHROPIC_API_KEY not found in .env.local');
  console.error('Please create a .env.local file with your API key:');
  console.error('ANTHROPIC_API_KEY=your_api_key_here');
  process.exit(1);
}

/**
 * Call the Anthropic API
 */
function callAnthropicAPI(systemPrompt, userPrompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt
        }
      ]
    });

    const options = {
      hostname: 'api.anthropic.com',
      port: 443,
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(body);
            resolve(response.content[0].text);
          } catch (error) {
            reject(new Error(`Failed to parse API response: ${error.message}`));
          }
        } else {
          reject(new Error(`API request failed with status ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`API request failed: ${error.message}`));
    });

    req.write(data);
    req.end();
  });
}

/**
 * Refine the Call Flow FTE content
 */
async function refineCallFlowContent() {
  console.log('🤖 Using Claude Opus 4.5 to refine Call Flow FTE content...\n');

  const systemPrompt = `You are an expert UX writer and content strategist specializing in enterprise B2B SaaS applications. Your task is to refine content for a First Time Experience (FTE) screen for Comcast Business VoiceEdge call flow setup.

Key context:
- This is for business customers setting up call routing for their main business number
- Users MUST set up: Business Hours, Voice Menu & Keypad, and Call Routing (these are required)
- Google Virtual Assistant is an optional premium upgrade/upsell
- The tone should be professional, clear, and reassuring
- Focus on benefits and outcomes, not just features
- Keep it concise - users want to get started quickly`;

  const userPrompt = `Please refine the following content for our Call Flow First Time Experience screen:

**Current Main Heading:**
"Set Up Your Call Flow"

**Current Description:**
"Configure how incoming calls are handled by setting up business hours, voice menus, and call routing to ensure every caller reaches the right destination."

**Required Feature Cards (3 cards):**

1. Business Hours
- Description: "Set open/closed days, hours, and holidays"

2. Voice Menu & Keypad
- Description: "Create interactive menus with keypad options"

3. Call Routing
- Description: "Route to external numbers, hunt groups, or voicemail"

**Optional Feature (Google Virtual Assistant):**
- Heading: "Upgrade with Google Virtual Assistant"
- Description: "Add intelligent voice recognition to enhance your call flow with natural language processing."

**Button Text:**
"GET STARTED"

**Helper Text:**
"Takes approximately 5-10 minutes to complete"

---

Please provide:
1. Refined main heading (keep it short and action-oriented)
2. Refined description paragraph (2-3 sentences max, focus on user benefit)
3. Refined descriptions for each of the 3 required feature cards (one sentence each, benefit-focused)
4. Refined Google Virtual Assistant section (heading + description, make it compelling as an upsell)
5. Any suggestions for button text or helper text improvements

Format your response as JSON with this structure:
{
  "heading": "...",
  "description": "...",
  "businessHours": "...",
  "voiceMenu": "...",
  "callRouting": "...",
  "gvaHeading": "...",
  "gvaDescription": "...",
  "buttonText": "...",
  "helperText": "..."
}`;

  try {
    const refinedContent = await callAnthropicAPI(systemPrompt, userPrompt);
    
    console.log('✅ Content refined successfully!\n');
    console.log('='.repeat(80));
    console.log(refinedContent);
    console.log('='.repeat(80));
    
    return refinedContent;
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
refineCallFlowContent();
