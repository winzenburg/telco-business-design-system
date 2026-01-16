import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { SingleFieldWizard } from '../src/components/patterns/SingleFieldWizard';
import { ConversationalWizard } from '../src/components/patterns/ConversationalWizard';
import { Input } from '../packages/components/ui/input';
import { Label } from '../packages/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../packages/components/ui/select';
import { Button } from '../packages/components/ui/button';
import { Icon } from '../src/components/Icon';

const meta: Meta = {
  title: 'Patterns/Wizards/Phase 3 - Advanced',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Advanced Wizard Patterns - Phase 3

Specialized wizard variants based on best-in-class implementations from Zendesk, Lemonade, GOV.UK, and Termly.

## Phase 3 Advanced Patterns ✅

### 1. **Single-Field Wizard** (Zendesk Pattern)
- **One question per page** for maximum focus
- Reduces cognitive load by 80%
- Increases mobile completion rates by 300%
- Perfect for long forms (8+ fields)

**Best For:**
- Mobile-first experiences
- High-stakes registration flows
- Lead qualification forms
- Survey and questionnaires

### 2. **Conversational Wizard** (Lemonade Pattern)
- **Chat-like interface** with typing indicators
- Friendly, engaging experience
- 90-second average completion (vs 5-10 minutes traditional)
- 90% bot-driven sales for Lemonade

**Best For:**
- Consumer products
- Insurance quotes
- Loan applications
- Casual brand voice

### 3. **Task List Wizard** (GOV.UK Pattern)
- **Non-linear workflow** for complex processes
- Task statuses: not started, in progress, completed, blocked
- Jump to any task (not sequential)
- Perfect for compliance-heavy flows

**Best For:**
- GOV.UK services
- Compliance workflows
- Long-running processes (days/weeks)
- Role-based access

### 4. **Side-by-Side Preview** (Termly Pattern)
- **Real-time document preview** as you fill form
- See exactly what you're building
- Reduces anxiety about final result
- Encourages completion

**Best For:**
- Document generation (contracts, policies)
- Configuration wizards
- Resume builders
- Design tools

## Research & Insights

**Luke Wroblewski:** "Breaking a long form into multiple pages can increase completion rates by up to 300%"

**Nielsen Norman Group:** "One-thing-per-page design reduces cognitive load and error rates"

**Lemonade Case Study:** "Conversational UI achieved 90% bot-driven sales with 90-second average completion time"

**GOV.UK:** "Task list pattern is the gold standard for long-running, non-linear flows with dependencies"

## When to Use Each Pattern

| Pattern | Form Length | User Type | Brand Voice | Mobile | Completion Time |
|---------|-------------|-----------|-------------|--------|-----------------|
| **Single-Field** | 8+ fields | All | Any | ⭐⭐⭐⭐⭐ | Fast |
| **Conversational** | Any | Consumer | Casual | ⭐⭐⭐⭐⭐ | Very Fast |
| **Task List** | 20+ fields | Enterprise | Professional | ⭐⭐⭐ | Slow (multi-session) |
| **Preview** | Medium | All | Any | ⭐⭐⭐ | Medium |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ===== SINGLE-FIELD WIZARD EXAMPLE =====

interface QuoteData {
  name?: string;
  email?: string;
  company?: string;
  companySize?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

export const SingleFieldWizardExample: Story = {
  name: '1. Single-Field Wizard (Zendesk)',
  render: () => {
    const [data, setData] = React.useState<Partial<QuoteData>>({});
    const [isComplete, setIsComplete] = React.useState(false);

    if (isComplete) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-50">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Submitted!</h2>
            <p className="text-neutral-600 mb-6">
              Thanks {data.name}! We'll send a quote to {data.email} within 24 hours.
            </p>
            <Button variant="primary" onClick={() => {
              setData({});
              setIsComplete(false);
            }}>
              Start Over
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-neutral-50">
        <SingleFieldWizard<QuoteData>
          questions={[
            {
              id: 'name',
              question: "What's your name?",
              description: "Let's start with the basics",
              schema: z.object({ name: z.string().min(2, 'Please enter your full name') }),
              field: (
                <Input
                  placeholder="John Smith"
                  value={data.name || ''}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="text-2xl py-6"
                  autoFocus
                />
              ),
            },
            {
              id: 'email',
              question: "What's your email?",
              description: "We'll send the quote here",
              schema: z.object({
                email: z.string().email('Please enter a valid email').refine(
                  (email) => !email.endsWith('@gmail.com') && !email.endsWith('@yahoo.com'),
                  'Please use your work email',
                ),
              }),
              field: (
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={data.email || ''}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="text-2xl py-6"
                  autoFocus
                />
              ),
            },
            {
              id: 'company',
              question: "Which company do you work for?",
              schema: z.object({ company: z.string().min(2, 'Company name required') }),
              field: (
                <Input
                  placeholder="Acme Corp"
                  value={data.company || ''}
                  onChange={(e) => setData({ ...data, company: e.target.value })}
                  className="text-2xl py-6"
                  autoFocus
                />
              ),
            },
            {
              id: 'companySize',
              question: "How big is your team?",
              description: "This helps us understand your needs",
              field: (
                <Select
                  value={data.companySize}
                  onValueChange={(value) => setData({ ...data, companySize: value })}
                >
                  <SelectTrigger className="text-2xl py-6">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-1000">201-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              ),
            },
            {
              id: 'budget',
              question: "What's your budget range?",
              description: "We'll tailor our recommendations",
              field: (
                <Select
                  value={data.budget}
                  onValueChange={(value) => setData({ ...data, budget: value })}
                >
                  <SelectTrigger className="text-2xl py-6">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<10k">Less than $10,000</SelectItem>
                    <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value=">100k">More than $100,000</SelectItem>
                  </SelectContent>
                </Select>
              ),
            },
            {
              id: 'timeline',
              question: "When do you need this?",
              field: (
                <Select
                  value={data.timeline}
                  onValueChange={(value) => setData({ ...data, timeline: value })}
                >
                  <SelectTrigger className="text-2xl py-6">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (within 2 weeks)</SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              ),
            },
            {
              id: 'message',
              question: "Anything else we should know?",
              description: "Optional - tell us about your project",
              field: (
                <textarea
                  placeholder="Tell us more about what you're looking for..."
                  value={data.message || ''}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                  className="w-full text-xl p-4 border border-neutral-300 rounded-lg resize-none"
                  rows={4}
                  autoFocus
                />
              ),
            },
          ]}
          data={data}
          onDataChange={setData}
          onComplete={() => {
            console.log('Quote request:', data);
            setIsComplete(true);
          }}
        />
      </div>
    );
  },
};

// ===== CONVERSATIONAL WIZARD EXAMPLE =====

interface InsuranceQuoteData {
  propertyType?: string;
  zipCode?: string;
  homeSize?: string;
  yearBuilt?: string;
  coverageAmount?: string;
}

export const ConversationalWizardExample: Story = {
  name: '2. Conversational Wizard (Lemonade)',
  render: () => {
    const [data, setData] = React.useState<Partial<InsuranceQuoteData>>({});
    const [isComplete, setIsComplete] = React.useState(false);

    if (isComplete) {
      return (
        <div className="flex items-center justify-center h-screen bg-neutral-50">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Quote is Ready!</h2>
            <p className="text-4xl font-bold text-primary-600 mb-4">$42/month</p>
            <p className="text-neutral-600 mb-6">
              Coverage: ${data.coverageAmount?.replace('k', ',000')}
            </p>
            <Button variant="primary" size="lg" onClick={() => alert('Purchase flow would start here')}>
              Get Covered Now
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="h-screen bg-neutral-50">
        <ConversationalWizard<InsuranceQuoteData>
          messages={[
            {
              id: 'propertyType',
              question: "👋 Hi! I'm Maya, your insurance assistant. What type of property do you want to insure?",
              formatResponse: (value) => `I want to insure a ${value}`,
              field: (
                <div className="space-y-2">
                  {['House', 'Condo', 'Apartment'].map((type) => (
                    <Button
                      key={type}
                      variant="outline"
                      className="w-full text-left justify-start"
                      onClick={() => setData({ ...data, propertyType: type })}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              ),
            },
            {
              id: 'zipCode',
              question: "Great! What's your ZIP code?",
              schema: z.object({
                zipCode: z.string().regex(/^\d{5}$/, 'Please enter a valid 5-digit ZIP code'),
              }),
              formatResponse: (value) => `My ZIP code is ${value}`,
              field: (
                <div className="flex gap-2">
                  <Input
                    placeholder="12345"
                    maxLength={5}
                    value={data.zipCode || ''}
                    onChange={(e) => setData({ ...data, zipCode: e.target.value.replace(/\D/g, '') })}
                    className="text-lg"
                  />
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (data.zipCode && /^\d{5}$/.test(data.zipCode)) {
                        // Trigger next question
                      }
                    }}
                  >
                    Send
                  </Button>
                </div>
              ),
            },
            {
              id: 'homeSize',
              question: "How many square feet is your home?",
              formatResponse: (value) => `About ${value} sq ft`,
              field: (
                <div className="space-y-2">
                  {['< 1,000', '1,000-2,000', '2,000-3,000', '> 3,000'].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="w-full text-left justify-start"
                      onClick={() => setData({ ...data, homeSize: size })}
                    >
                      {size} sq ft
                    </Button>
                  ))}
                </div>
              ),
            },
            {
              id: 'yearBuilt',
              question: "When was it built?",
              formatResponse: (value) => `Built in ${value}`,
              field: (
                <div className="flex gap-2">
                  <Input
                    placeholder="2020"
                    maxLength={4}
                    value={data.yearBuilt || ''}
                    onChange={(e) => setData({ ...data, yearBuilt: e.target.value.replace(/\D/g, '') })}
                    className="text-lg"
                  />
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (data.yearBuilt && /^\d{4}$/.test(data.yearBuilt)) {
                        // Trigger next question
                      }
                    }}
                  >
                    Send
                  </Button>
                </div>
              ),
            },
            {
              id: 'coverageAmount',
              question: "Perfect! How much coverage do you need?",
              formatResponse: (value) => `I need $${value} coverage`,
              field: (
                <div className="space-y-2">
                  {['100k', '250k', '500k', '1M'].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="w-full text-left justify-start"
                      onClick={() => setData({ ...data, coverageAmount: amount })}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              ),
            },
          ]}
          data={data}
          onDataChange={setData}
          onComplete={(finalData) => {
            console.log('Insurance quote data:', finalData);
            setIsComplete(true);
          }}
          botName="Maya"
        />
      </div>
    );
  },
};

// ===== COMPARISON GUIDE =====

export const PatternComparison: Story = {
  name: '3. Pattern Comparison Guide',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">When to Use Each Pattern</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Single-Field Wizard */}
        <div className="border border-neutral-300 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">Single-Field Wizard</h2>
          <p className="text-neutral-600 mb-4">
            <strong>Research:</strong> 300% increase in mobile completion rates (Luke Wroblewski)
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-success-700"><Icon name="complete" size={16} className="text-success-600 inline" /> Best For:</h3>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Mobile-first experiences</li>
                <li>• Long forms (8+ fields)</li>
                <li>• High-stakes registration</li>
                <li>• Lead qualification</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-destructive-700"><Icon name="alert" size={16} className="text-destructive-600 inline" /> Avoid When:</h3>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Short forms (&lt;5 fields)</li>
                <li>• Need to compare across steps</li>
                <li>• Desktop-only users</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-3 rounded">
              <p className="text-xs font-semibold mb-1">Examples:</p>
              <p className="text-xs text-neutral-600">Zendesk, Typeform, TurboTax</p>
            </div>
          </div>
        </div>

        {/* Conversational Wizard */}
        <div className="border border-neutral-300 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">Conversational Wizard</h2>
          <p className="text-neutral-600 mb-4">
            <strong>Research:</strong> 90% bot-driven sales, 90s avg completion (Lemonade)
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-success-700"><Icon name="complete" size={16} className="text-success-600 inline" /> Best For:</h3>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Consumer products</li>
                <li>• Casual brand voice</li>
                <li>• Insurance/loan quotes</li>
                <li>• Mobile-first</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-destructive-700"><Icon name="alert" size={16} className="text-destructive-600 inline" /> Avoid When:</h3>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Enterprise/B2B products</li>
                <li>• Formal brand voice</li>
                <li>• Complex data entry</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-3 rounded">
              <p className="text-xs font-semibold mb-1">Examples:</p>
              <p className="text-xs text-neutral-600">Lemonade, Drift, Intercom</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold mb-2">💡 Pro Tip: Combine Patterns</h3>
        <p className="text-sm text-neutral-700">
          Use <strong>Conversational</strong> for mobile, <strong>Single-Field</strong> for tablets, and
          traditional <strong>Multi-Step</strong> for desktop. Adapt based on device and context!
        </p>
      </div>
    </div>
  ),
};
