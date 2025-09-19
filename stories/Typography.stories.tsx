import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { 
  fontFamilies, 
  typeScale, 
  semanticTypography,
  tailwindTypography
} from '../src/tokens/typography-consolidated';
import { Typography, Title, Body, Label, Code } from '../src/components/ui/typography';

const meta: Meta = {
  title: ' Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Typography system for Comcast Business Design System using Montserrat and Lato fonts from Figma. All typography tokens include copy functionality and proper font loading.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Copy to clipboard utility
const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  }
};

const formatCSS = (styles: any): string => {
  const fontStack = styles.fontFamily === 'Montserrat' ? fontFamilies.primary.stack : 
                   styles.fontFamily === 'Lato' ? fontFamilies.secondary.stack :
                   fontFamilies.primary.stack;
  
  return `font-family: ${fontStack};
font-size: ${styles.fontSize};
font-weight: ${styles.fontWeight || 400};
line-height: ${styles.lineHeight};
letter-spacing: ${styles.letterSpacing || 'normal'};`;
};

// Typography Sample Component
interface TypographySampleProps {
  label: string;
  styles: any;
  text: string;
  category: string;
}

const TypographySample: React.FC<TypographySampleProps> = ({ label, styles, text, category }) => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopyCSS = async () => {
    const css = formatCSS(styles);
    const success = await copyToClipboard(css);
    if (success) {
      setCopySuccess('CSS copied!');
      setTimeout(() => setCopySuccess(null), 2000);
    }
  };

  const handleCopyClassName = async () => {
    const className = `text-${category}-${label.toLowerCase()}`;
    const success = await copyToClipboard(className);
    if (success) {
      setCopySuccess('Class copied!');
      setTimeout(() => setCopySuccess(null), 2000);
    }
  };

  return (
    <div className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
      {copySuccess && (
        <div className="mb-2 text-sm text-green-600 font-medium">
          {copySuccess}
        </div>
      )}
      
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-900">{label}</h4>
        <p className="text-xs text-gray-500 capitalize">
          {styles.fontFamily} • {styles.fontSize} • {styles.fontWeight}
        </p>
      </div>
      
      <div 
        className="mb-4"
        style={{
          fontFamily: styles.fontFamily === 'Montserrat' ? fontFamilies.primary.stack : fontFamilies.secondary.stack,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          lineHeight: styles.lineHeight,
          letterSpacing: styles.letterSpacing === 'normal' ? '0' : styles.letterSpacing,
        }}
      >
        {text}
      </div>
      
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopyCSS}
          className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
        >
          Copy CSS
        </button>
        <button
          onClick={handleCopyClassName}
          className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
        >
          Copy Class
        </button>
      </div>
    </div>
  );
};

// Main Typography Showcase
export const TypographyShowcase: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: fontFamilies.primary.stack }}
        >
          Typography System
        </h1>
        <p 
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          style={{ fontFamily: fontFamilies.secondary.stack }}
        >
          Comcast Business Design System uses <strong>Montserrat</strong> for headings, buttons, and UI elements, 
          and <strong>Lato</strong> for body text and content. All typography follows Figma specifications.
        </p>
      </div>

      {/* Font Family Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: fontFamilies.primary.stack }}>
          Font Families
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(fontFamilies).map(([key, font]) => (
            <div key={key} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase">{key} Font</h3>
              <div className="mb-3">
                <div 
                  className="text-lg mb-1"
                  style={{ fontFamily: font.stack }}
                >
                  {font.name}
                </div>
                <div className="text-xs text-gray-500">{font.usage}</div>
              </div>
              <div className="text-xs text-gray-400">
                Weights: {font.weights.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Title System Showcase */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: fontFamilies.primary.stack }}>
          Complete Title System
        </h2>
        <p className="text-sm text-gray-600">
          Enhanced title hierarchy with multiple weight variants and proper semantic usage.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regular Title Weights */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Regular Titles</h3>
            {Object.entries(typeScale.title).map(([variant, styles]) => (
              <TypographySample
                key={`title-${variant}`}
                label={`Title ${variant.toUpperCase()}`}
                styles={{ ...styles, fontFamily: 'Montserrat' }}
                text={`Title ${variant.toUpperCase()} - ${styles.usage}`}
                category="title"
              />
            ))}
          </div>

          {/* Medium Title Weights */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Medium Weight Titles</h3>
            {Object.entries(typeScale.titleMedium).map(([variant, styles]) => (
              <TypographySample
                key={`title-medium-${variant}`}
                label={`Title ${variant.toUpperCase()} Medium`}
                styles={{ ...styles, fontFamily: 'Montserrat' }}
                text={`Title ${variant.toUpperCase()} Medium - ${styles.usage}`}
                category="title-medium"
              />
            ))}
          </div>

          {/* Semibold Title Weights */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-medium text-gray-900">Semibold Titles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(typeScale.titleSemibold).map(([variant, styles]) => (
                <TypographySample
                  key={`title-semibold-${variant}`}
                  label={`Title ${variant.toUpperCase()} Semibold`}
                  styles={{ ...styles, fontFamily: 'Montserrat' }}
                  text={`Title ${variant.toUpperCase()} Semibold - ${styles.usage}`}
                  category="title-semibold"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Body System */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: fontFamilies.primary.stack }}>
          Complete Body Text System
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regular Body Text */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Regular Body Text</h3>
            {Object.entries(typeScale.body).filter(([key]) => !['base', 'lg', 'sm'].includes(key)).map(([variant, styles]) => (
              <TypographySample
                key={`body-${variant}`}
                label={`Body ${variant.toUpperCase()}`}
                styles={{ ...styles, fontFamily: 'Lato' }}
                text={`Body ${variant.toUpperCase()} - ${styles.usage}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                category="body"
              />
            ))}
          </div>

          {/* Semibold Body Text */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Semibold Body Text</h3>
            {Object.entries(typeScale.bodySemibold).map(([variant, styles]) => (
              <TypographySample
                key={`body-semibold-${variant}`}
                label={`Body ${variant.toUpperCase()} Semibold`}
                styles={{ ...styles, fontFamily: 'Lato' }}
                text={`Body ${variant.toUpperCase()} Semibold - ${styles.usage}. Important emphasized content.`}
                category="body-semibold"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Typography */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: fontFamilies.primary.stack }}>
          Interactive Elements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Button Typography</h3>
            {Object.entries(typeScale.interactive.button).map(([size, styles]) => (
              <TypographySample
                key={`button-${size}`}
                label={`Button ${size}`}
                styles={{ ...styles, fontFamily: 'Lato' }}
                text={`Button ${size} - ${styles.usage}`}
                category="button"
              />
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Label Typography</h3>
            {Object.entries(typeScale.interactive.label).map(([size, styles]) => (
              <TypographySample
                key={`label-${size}`}
                label={`Label ${size}`}
                styles={{ ...styles, fontFamily: 'Lato' }}
                text={`Label ${size} - ${styles.usage}`}
                category="label"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Font Families Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
            Montserrat (Primary)
          </h3>
          <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: fontFamilies.secondary.stack }}>
            Used for headings, buttons, labels, navigation, and UI elements
          </p>
          <div className="space-y-2">
            {[300, 400, 500, 600, 700].map(weight => (
              <div key={weight} style={{ fontFamily: fontFamilies.primary.stack, fontWeight: weight }}>
                Montserrat {weight} - The quick brown fox jumps over the lazy dog
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
            Lato (Secondary)
          </h3>
          <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: fontFamilies.secondary.stack }}>
            Used for body text, paragraphs, descriptions, and content areas
          </p>
          <div className="space-y-2">
            {[300, 400, 500, 700].map(weight => (
              <div key={weight} style={{ fontFamily: fontFamilies.secondary.stack, fontWeight: weight }}>
                Lato {weight} - The quick brown fox jumps over the lazy dog
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Title Hierarchy - Complete System */}
      <div>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Title Hierarchy (Montserrat)
        </h2>
        
        {/* Main Title Variants */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Standard Titles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(typeScale.title).map(([size, styles]) => (
              <TypographySample
                key={size}
                label={`Title ${size.toUpperCase()}`}
                styles={styles}
                text="Design System"
                category="title"
              />
            ))}
          </div>
        </div>

        {/* Medium Weight Variants */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Medium Weight Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(typeScale.titleMedium).map(([size, styles]) => (
              <TypographySample
                key={size}
                label={`Title ${size.toUpperCase()} Medium`}
                styles={styles}
                text="Design System"
                category="title-medium"
              />
            ))}
          </div>
        </div>

        {/* Semibold Variants */}
        <div>
          <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Semibold Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(typeScale.titleSemibold).map(([size, styles]) => (
              <TypographySample
                key={size}
                label={`Title ${size.toUpperCase()} Semibold`}
                styles={styles}
                text="Design System"
                category="title-semibold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Body Text - Complete System */}
      <div>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Body Text (Lato)
        </h2>
        
        {/* Regular Body Variants */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Regular Weight (400)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(typeScale.body)
              .filter(([key]) => !['base', 'lg', 'sm'].includes(key)) // Filter out legacy aliases
              .map(([size, styles]) => (
              <TypographySample
                key={size}
                label={`Body ${size.toUpperCase()}`}
                styles={{
                  ...styles,
                  fontFamily: 'Lato'
                }}
                text="This is sample body text that demonstrates the typography system in use across different content areas and applications."
                category="body"
              />
            ))}
          </div>
        </div>

        {/* Semibold Body Variants */}
        <div>
          <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Semibold Weight (600)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(typeScale.bodySemibold).map(([size, styles]) => (
              <TypographySample
                key={size}
                label={`Body ${size.toUpperCase()} Semibold`}
                styles={{
                  ...styles,
                  fontFamily: 'Lato'
                }}
                text="This is emphasized body text that demonstrates semibold weight for important content and highlighted information."
                category="body-semibold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Elements */}
      <div>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Interactive Elements (Montserrat)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Button Text</h3>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(typeScale.interactive.button).map(([size, styles]) => (
                <TypographySample
                  key={size}
                  label={`Button ${size.toUpperCase()}`}
                  styles={{
                    ...styles,
                    fontFamily: 'Montserrat'
                  }}
                  text="Get Started"
                  category="button"
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Label Text</h3>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(typeScale.interactive.label).map(([size, styles]) => (
                <TypographySample
                  key={size}
                  label={`Label ${size.toUpperCase()}`}
                  styles={{
                    ...styles,
                    fontFamily: 'Montserrat'
                  }}
                  text="Form Label"
                  category="label"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Semantic Examples */}
      <div>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Semantic Usage Examples
        </h2>
        <div className="space-y-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
              Article Layout
            </h3>
            <div className="space-y-4">
              <h1 style={{ 
                fontFamily: fontFamilies.primary.stack,
                fontSize: typeScale.title['2xl'].fontSize,
                fontWeight: typeScale.title['2xl'].fontWeight,
                lineHeight: typeScale.title['2xl'].lineHeight
              }}>
                Main Article Title
              </h1>
              <h2 style={{ 
                fontFamily: fontFamilies.primary.stack,
                fontSize: typeScale.title.l.fontSize,
                fontWeight: typeScale.title.l.fontWeight,
                lineHeight: typeScale.title.l.lineHeight
              }}>
                Section Heading
              </h2>
              <p style={{ 
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.body.l.fontSize,
                fontWeight: typeScale.body.l.fontWeight,
                lineHeight: typeScale.body.l.lineHeight
              }}>
                This is the main body text using Lato font. It's designed to be highly readable for longer 
                content areas like articles, descriptions, and detailed information. The spacing and line 
                height are optimized for comfortable reading experiences.
              </p>
              <p style={{ 
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.body.s.fontSize,
                fontWeight: typeScale.body.s.fontWeight,
                lineHeight: typeScale.body.s.lineHeight,
                color: '#666'
              }}>
                This is smaller supporting text or captions using the Body Small style.
              </p>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
              UI Components
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-md"
                  style={{ 
                    fontFamily: fontFamilies.primary.stack,
                    fontSize: typeScale.interactive.button.base.fontSize,
                    fontWeight: typeScale.interactive.button.base.fontWeight,
                    lineHeight: typeScale.interactive.button.base.lineHeight
                  }}
                >
                  Primary Button
                </button>
                <button 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md"
                  style={{ 
                    fontFamily: fontFamilies.primary.stack,
                    fontSize: typeScale.interactive.button.sm.fontSize,
                    fontWeight: typeScale.interactive.button.sm.fontWeight,
                    lineHeight: typeScale.interactive.button.sm.lineHeight
                  }}
                >
                  Secondary Button
                </button>
              </div>
              
              <div className="space-y-2">
                <label 
                  className="block"
                  style={{ 
                    fontFamily: fontFamilies.primary.stack,
                    fontSize: typeScale.interactive.label.base.fontSize,
                    fontWeight: typeScale.interactive.label.base.fontWeight,
                    lineHeight: typeScale.interactive.label.base.lineHeight
                  }}
                >
                  Form Label
                </label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Input text using Lato"
                  style={{ 
                    fontFamily: fontFamilies.secondary.stack,
                    fontSize: typeScale.body.m.fontSize,
                    lineHeight: typeScale.body.m.lineHeight
                  }}
                />
                <p 
                  className="text-gray-500"
                  style={{ 
                    fontFamily: fontFamilies.secondary.stack,
                    fontSize: typeScale.body.s.fontSize,
                    lineHeight: typeScale.body.s.lineHeight
                  }}
                >
                  Helper text for the input field
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
          Implementation Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3" style={{ fontFamily: fontFamilies.primary.stack }}>
              Font Loading
            </h3>
            <pre className="text-sm bg-white p-4 rounded border overflow-x-auto">
{`<!-- Already loaded in Storybook -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700&display=swap" rel="stylesheet">`}
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3" style={{ fontFamily: fontFamilies.primary.stack }}>
              CSS Usage
            </h3>
            <pre className="text-sm bg-white p-4 rounded border overflow-x-auto">
{`/* Primary font stack */
font-family: ${fontFamilies.primary.stack};

/* Secondary font stack */
font-family: ${fontFamilies.secondary.stack};`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
};

// Font Loading Test
// Complete Title Hierarchy Showcase
export const TitleHierarchy: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: fontFamilies.primary.stack }}>
          Complete Title Hierarchy
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: fontFamilies.secondary.stack }}>
          All title variants including 5XL, 4XL, 3XL, 2XL, XL, L, M with regular, medium, and semibold weights
        </p>
      </div>

      {/* Visual Hierarchy Demo */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Visual Scale Demonstration
        </h2>
        
        <div className="space-y-6">
          {/* Title 5XL */}
          <div className="border-b border-gray-200 pb-4">
            <h1 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title['5xl'].fontSize,
              lineHeight: typeScale.title['5xl'].lineHeight,
              fontWeight: typeScale.title['5xl'].fontWeight,
              letterSpacing: typeScale.title['5xl'].letterSpacing
            }}>
              Title 5XL - Hero Headlines
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title['5xl'].fontSize} • {typeScale.title['5xl'].fontWeight} • {typeScale.title['5xl'].usage}
            </p>
          </div>

          {/* Title 4XL */}
          <div className="border-b border-gray-200 pb-4">
            <h1 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title['4xl'].fontSize,
              lineHeight: typeScale.title['4xl'].lineHeight,
              fontWeight: typeScale.title['4xl'].fontWeight,
              letterSpacing: typeScale.title['4xl'].letterSpacing
            }}>
              Title 4XL - Page Headlines
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title['4xl'].fontSize} • {typeScale.title['4xl'].fontWeight} • {typeScale.title['4xl'].usage}
            </p>
          </div>

          {/* Title 3XL */}
          <div className="border-b border-gray-200 pb-4">
            <h2 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title['3xl'].fontSize,
              lineHeight: typeScale.title['3xl'].lineHeight,
              fontWeight: typeScale.title['3xl'].fontWeight,
              letterSpacing: typeScale.title['3xl'].letterSpacing
            }}>
              Title 3XL - Section Headers
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title['3xl'].fontSize} • {typeScale.title['3xl'].fontWeight} • {typeScale.title['3xl'].usage}
            </p>
          </div>

          {/* Title 2XL */}
          <div className="border-b border-gray-200 pb-4">
            <h3 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title['2xl'].fontSize,
              lineHeight: typeScale.title['2xl'].lineHeight,
              fontWeight: typeScale.title['2xl'].fontWeight,
              letterSpacing: typeScale.title['2xl'].letterSpacing
            }}>
              Title 2XL - Subsection Headers
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title['2xl'].fontSize} • {typeScale.title['2xl'].fontWeight} • {typeScale.title['2xl'].usage}
            </p>
          </div>

          {/* Title XL */}
          <div className="border-b border-gray-200 pb-4">
            <h4 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title.xl.fontSize,
              lineHeight: typeScale.title.xl.lineHeight,
              fontWeight: typeScale.title.xl.fontWeight,
              letterSpacing: typeScale.title.xl.letterSpacing
            }}>
              Title XL - Component Titles
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title.xl.fontSize} • {typeScale.title.xl.fontWeight} • {typeScale.title.xl.usage}
            </p>
          </div>

          {/* Title L */}
          <div className="border-b border-gray-200 pb-4">
            <h5 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title.l.fontSize,
              lineHeight: typeScale.title.l.lineHeight,
              fontWeight: typeScale.title.l.fontWeight,
              letterSpacing: typeScale.title.l.letterSpacing
            }}>
              Title L - Card Titles
            </h5>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title.l.fontSize} • {typeScale.title.l.fontWeight} • {typeScale.title.l.usage}
            </p>
          </div>

          {/* Title M */}
          <div className="border-b border-gray-200 pb-4">
            <h6 style={{
              fontFamily: fontFamilies.primary.stack,
              fontSize: typeScale.title.m.fontSize,
              lineHeight: typeScale.title.m.lineHeight,
              fontWeight: typeScale.title.m.fontWeight,
              letterSpacing: typeScale.title.m.letterSpacing
            }}>
              Title M - Small Headings
            </h6>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.title.m.fontSize} • {typeScale.title.m.fontWeight} • {typeScale.title.m.usage}
            </p>
          </div>
        </div>
      </div>

      {/* Weight Variations */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Weight Variations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Medium Weight */}
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Medium Weight (500)</h3>
            <div className="space-y-4">
              <div>
                <h4 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleMedium['3xl'].fontSize,
                  lineHeight: typeScale.titleMedium['3xl'].lineHeight,
                  fontWeight: typeScale.titleMedium['3xl'].fontWeight,
                  letterSpacing: typeScale.titleMedium['3xl'].letterSpacing
                }}>
                  Title 3XL Medium
                </h4>
                <p className="text-xs text-gray-600">{typeScale.titleMedium['3xl'].fontSize} • {typeScale.titleMedium['3xl'].fontWeight}</p>
              </div>
              
              <div>
                <h5 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleMedium['2xl'].fontSize,
                  lineHeight: typeScale.titleMedium['2xl'].lineHeight,
                  fontWeight: typeScale.titleMedium['2xl'].fontWeight,
                  letterSpacing: typeScale.titleMedium['2xl'].letterSpacing
                }}>
                  Title 2XL Medium
                </h5>
                <p className="text-xs text-gray-600">{typeScale.titleMedium['2xl'].fontSize} • {typeScale.titleMedium['2xl'].fontWeight}</p>
              </div>
            </div>
          </div>

          {/* Semibold Weight */}
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Semibold Weight (600)</h3>
            <div className="space-y-4">
              <div>
                <h4 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleSemibold['5xl'].fontSize,
                  lineHeight: typeScale.titleSemibold['5xl'].lineHeight,
                  fontWeight: typeScale.titleSemibold['5xl'].fontWeight,
                  letterSpacing: typeScale.titleSemibold['5xl'].letterSpacing
                }}>
                  Title 5XL Semibold
                </h4>
                <p className="text-xs text-gray-600">{typeScale.titleSemibold['5xl'].fontSize} • {typeScale.titleSemibold['5xl'].fontWeight}</p>
              </div>
              
              <div>
                <h5 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleSemibold['4xl'].fontSize,
                  lineHeight: typeScale.titleSemibold['4xl'].lineHeight,
                  fontWeight: typeScale.titleSemibold['4xl'].fontWeight,
                  letterSpacing: typeScale.titleSemibold['4xl'].letterSpacing
                }}>
                  Title 4XL Semibold
                </h5>
                <p className="text-xs text-gray-600">{typeScale.titleSemibold['4xl'].fontSize} • {typeScale.titleSemibold['4xl'].fontWeight}</p>
              </div>

              <div>
                <h6 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleSemibold.xl.fontSize,
                  lineHeight: typeScale.titleSemibold.xl.lineHeight,
                  fontWeight: typeScale.titleSemibold.xl.fontWeight,
                  letterSpacing: typeScale.titleSemibold.xl.letterSpacing
                }}>
                  Title XL Semibold
                </h6>
                <p className="text-xs text-gray-600">{typeScale.titleSemibold.xl.fontSize} • {typeScale.titleSemibold.xl.fontWeight}</p>
              </div>

              <div>
                <h6 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleSemibold.l.fontSize,
                  lineHeight: typeScale.titleSemibold.l.lineHeight,
                  fontWeight: typeScale.titleSemibold.l.fontWeight,
                  letterSpacing: typeScale.titleSemibold.l.letterSpacing
                }}>
                  Title L Semibold
                </h6>
                <p className="text-xs text-gray-600">{typeScale.titleSemibold.l.fontSize} • {typeScale.titleSemibold.l.fontWeight}</p>
              </div>

              <div>
                <h6 style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: typeScale.titleSemibold.m.fontSize,
                  lineHeight: typeScale.titleSemibold.m.lineHeight,
                  fontWeight: typeScale.titleSemibold.m.fontWeight,
                  letterSpacing: typeScale.titleSemibold.m.letterSpacing
                }}>
                  Title M Semibold
                </h6>
                <p className="text-xs text-gray-600">{typeScale.titleSemibold.m.fontSize} • {typeScale.titleSemibold.m.fontWeight}</p>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Usage Context</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <strong>Hero Headlines:</strong> Title 5XL for landing pages and major announcements
              </div>
              <div>
                <strong>Page Headlines:</strong> Title 4XL for main page titles and primary headers
              </div>
              <div>
                <strong>Section Headers:</strong> Title 3XL for major content sections
              </div>
              <div>
                <strong>Subsections:</strong> Title 2XL for subsection organization
              </div>
              <div>
                <strong>Components:</strong> Title XL for component and card titles
              </div>
              <div>
                <strong>Small Elements:</strong> Title L and M for compact headings
              </div>
              <div>
                <strong>Weight Variants:</strong> Use Medium (500) for lighter emphasis, Semibold (600) for stronger emphasis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Classes */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
          CSS Class Reference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Standard Titles</h4>
            <ul className="space-y-1 font-mono text-xs">
              <li>text-title-5xl</li>
              <li>text-title-4xl</li>
              <li>text-title-3xl</li>
              <li>text-title-2xl</li>
              <li>text-title-xl</li>
              <li>text-title-l</li>
              <li>text-title-m</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Medium Weight</h4>
            <ul className="space-y-1 font-mono text-xs">
              <li>text-title-3xl-medium</li>
              <li>text-title-2xl-medium</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Semibold Weight</h4>
            <ul className="space-y-1 font-mono text-xs">
              <li>text-title-5xl-semibold</li>
              <li>text-title-4xl-semibold</li>
              <li>text-title-xl-semibold</li>
              <li>text-title-l-semibold</li>
              <li>text-title-m-semibold</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

// Complete Body Typography Showcase
export const BodyTypography: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: fontFamilies.primary.stack }}>
          Body Typography System
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: fontFamilies.secondary.stack }}>
          Complete body text hierarchy including XL, L, M, S, XS with regular and semibold weights using Lato font
        </p>
      </div>

      {/* Visual Scale Demo */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Body Text Scale (Regular Weight 400)
        </h2>
        
        <div className="space-y-6">
          {/* Body XL */}
          <div className="border-b border-gray-200 pb-4">
            <p style={{
              fontFamily: fontFamilies.secondary.stack,
              fontSize: typeScale.body.xl.fontSize,
              lineHeight: typeScale.body.xl.lineHeight,
              fontWeight: typeScale.body.xl.fontWeight,
              letterSpacing: typeScale.body.xl.letterSpacing
            }}>
              Body XL - This is large body text used for introductions, featured content, and important paragraphs that need emphasis. The larger size makes it perfect for hero descriptions and key messaging.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.body.xl.fontSize} • {typeScale.body.xl.fontWeight} • {typeScale.body.xl.usage}
            </p>
          </div>

          {/* Body L */}
          <div className="border-b border-gray-200 pb-4">
            <p style={{
              fontFamily: fontFamilies.secondary.stack,
              fontSize: typeScale.body.l.fontSize,
              lineHeight: typeScale.body.l.lineHeight,
              fontWeight: typeScale.body.l.fontWeight,
              letterSpacing: typeScale.body.l.letterSpacing
            }}>
              Body L - This is the default body text size used for most content, articles, descriptions, and general reading material. It provides excellent readability and is the foundation of our content typography.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.body.l.fontSize} • {typeScale.body.l.fontWeight} • {typeScale.body.l.usage}
            </p>
          </div>

          {/* Body M */}
          <div className="border-b border-gray-200 pb-4">
            <p style={{
              fontFamily: fontFamilies.secondary.stack,
              fontSize: typeScale.body.m.fontSize,
              lineHeight: typeScale.body.m.lineHeight,
              fontWeight: typeScale.body.m.fontWeight,
              letterSpacing: typeScale.body.m.letterSpacing
            }}>
              Body M - This is secondary text used for captions, supporting information, form helper text, and supplementary content that doesn't need primary emphasis but remains readable.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.body.m.fontSize} • {typeScale.body.m.fontWeight} • {typeScale.body.m.usage}
            </p>
          </div>

          {/* Body S */}
          <div className="border-b border-gray-200 pb-4">
            <p style={{
              fontFamily: fontFamilies.secondary.stack,
              fontSize: typeScale.body.s.fontSize,
              lineHeight: typeScale.body.s.lineHeight,
              fontWeight: typeScale.body.s.fontWeight,
              letterSpacing: typeScale.body.s.letterSpacing
            }}>
              Body S - This is small text used for helper information, footnotes, disclaimers, and secondary details that support the main content without competing for attention.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.body.s.fontSize} • {typeScale.body.s.fontWeight} • {typeScale.body.s.usage}
            </p>
          </div>

          {/* Body XS */}
          <div className="border-b border-gray-200 pb-4">
            <p style={{
              fontFamily: fontFamilies.secondary.stack,
              fontSize: typeScale.body.xs.fontSize,
              lineHeight: typeScale.body.xs.lineHeight,
              fontWeight: typeScale.body.xs.fontWeight,
              letterSpacing: typeScale.body.xs.letterSpacing
            }}>
              Body XS - This is the smallest body text used for fine print, timestamps, metadata, legal text, and other minimal supporting information.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {typeScale.body.xs.fontSize} • {typeScale.body.xs.fontWeight} • {typeScale.body.xs.usage}
            </p>
          </div>
        </div>
      </div>

      {/* Semibold Variants */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Body Text Semibold (Weight 600)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.bodySemibold.l.fontSize,
                lineHeight: typeScale.bodySemibold.l.lineHeight,
                fontWeight: typeScale.bodySemibold.l.fontWeight,
                letterSpacing: typeScale.bodySemibold.l.letterSpacing
              }}>
                Body L Semibold - Emphasized body text for important information
              </p>
              <p className="text-xs text-gray-600 mt-1">{typeScale.bodySemibold.l.fontSize} • {typeScale.bodySemibold.l.fontWeight}</p>
            </div>
            
            <div>
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.bodySemibold.m.fontSize,
                lineHeight: typeScale.bodySemibold.m.lineHeight,
                fontWeight: typeScale.bodySemibold.m.fontWeight,
                letterSpacing: typeScale.bodySemibold.m.letterSpacing
              }}>
                Body M Semibold - Emphasized secondary text for key details
              </p>
              <p className="text-xs text-gray-600 mt-1">{typeScale.bodySemibold.m.fontSize} • {typeScale.bodySemibold.m.fontWeight}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.bodySemibold.s.fontSize,
                lineHeight: typeScale.bodySemibold.s.lineHeight,
                fontWeight: typeScale.bodySemibold.s.fontWeight,
                letterSpacing: typeScale.bodySemibold.s.letterSpacing
              }}>
                Body S Semibold - Emphasized small text for important notes
              </p>
              <p className="text-xs text-gray-600 mt-1">{typeScale.bodySemibold.s.fontSize} • {typeScale.bodySemibold.s.fontWeight}</p>
            </div>
            
            <div>
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.bodySemibold.xs.fontSize,
                lineHeight: typeScale.bodySemibold.xs.lineHeight,
                fontWeight: typeScale.bodySemibold.xs.fontWeight,
                letterSpacing: typeScale.bodySemibold.xs.letterSpacing
              }}>
                Body XS Semibold - Emphasized fine print for critical details
              </p>
              <p className="text-xs text-gray-600 mt-1">{typeScale.bodySemibold.xs.fontSize} • {typeScale.bodySemibold.xs.fontWeight}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: fontFamilies.primary.stack }}>
          Usage Examples
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Article Layout */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Article Layout</h3>
            <div className="space-y-4">
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.body.xl.fontSize,
                lineHeight: typeScale.body.xl.lineHeight,
                fontWeight: typeScale.body.xl.fontWeight
              }}>
                This is the article introduction using Body XL for maximum impact and readability.
              </p>
              
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.body.l.fontSize,
                lineHeight: typeScale.body.l.lineHeight,
                fontWeight: typeScale.body.l.fontWeight
              }}>
                This is the main article content using Body L. This size provides excellent readability for extended reading and is the default choice for most content areas.
              </p>
              
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.body.m.fontSize,
                lineHeight: typeScale.body.m.lineHeight,
                fontWeight: typeScale.body.m.fontWeight,
                color: '#666'
              }}>
                This is supporting information using Body M for captions and secondary details.
              </p>
              
              <p style={{
                fontFamily: fontFamilies.secondary.stack,
                fontSize: typeScale.body.s.fontSize,
                lineHeight: typeScale.body.s.lineHeight,
                fontWeight: typeScale.body.s.fontWeight,
                color: '#888'
              }}>
                Published on March 15, 2024 using Body S for metadata.
              </p>
            </div>
          </div>
          
          {/* Form Layout */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>Form Layout</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1" style={{
                  fontFamily: fontFamilies.primary.stack,
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  style={{
                    fontFamily: fontFamilies.secondary.stack,
                    fontSize: typeScale.body.l.fontSize
                  }}
                />
                <p style={{
                  fontFamily: fontFamilies.secondary.stack,
                  fontSize: typeScale.body.m.fontSize,
                  lineHeight: typeScale.body.m.lineHeight,
                  color: '#666'
                }} className="mt-1">
                  Helper text using Body M
                </p>
              </div>
              
              <div>
                <p style={{
                  fontFamily: fontFamilies.secondary.stack,
                  fontSize: typeScale.bodySemibold.s.fontSize,
                  fontWeight: typeScale.bodySemibold.s.fontWeight,
                  color: '#059669'
                }}>
                  Success message using Body S Semibold
                </p>
              </div>
              
              <div>
                <p style={{
                  fontFamily: fontFamilies.secondary.stack,
                  fontSize: typeScale.body.xs.fontSize,
                  lineHeight: typeScale.body.xs.lineHeight,
                  color: '#888'
                }}>
                  Legal disclaimer text using Body XS for fine print and terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Classes Reference */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: fontFamilies.primary.stack }}>
          CSS Class Reference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Regular Body Text</h4>
            <ul className="space-y-1 font-mono text-sm">
              <li>text-body-xl</li>
              <li>text-body-l</li>
              <li>text-body-m</li>
              <li>text-body-s</li>
              <li>text-body-xs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Semibold Body Text</h4>
            <ul className="space-y-1 font-mono text-sm">
              <li>text-body-l-semibold</li>
              <li>text-body-m-semibold</li>
              <li>text-body-s-semibold</li>
              <li>text-body-xs-semibold</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded border-l-4 border-blue-500">
          <p className="text-sm text-blue-800">
            <strong>Font Family:</strong> All body text uses Lato with fallback to system fonts: {fontFamilies.secondary.stack}
          </p>
        </div>
      </div>
    </div>
  )
};

export const FontLoadingTest: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Font Loading Verification</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Montserrat Test
          </h2>
          <div className="space-y-2">
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              Regular 400: The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
              Medium 500: The quick brown fox jumps over the lazy dog  
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              SemiBold 600: The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Bold 700: The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Lato Test
          </h2>
          <div className="space-y-2">
            <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
              Light 300: The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}>
              Regular 400: The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 500 }}>
              Medium 500: The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
              Bold 700: The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> If you see fallback fonts (system fonts) instead of Montserrat and Lato, 
          the Google Fonts may still be loading. Check your network tab for font loading status.
        </p>
      </div>
    </div>
  )
};

// Typography Utility Components Story
export const TypographyComponents: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div className="text-center space-y-4">
        <Title level={1}>Typography Utility Components</Title>
        <Body size="xl">
          Easy-to-use React components that automatically apply the correct typography styles from our design system.
        </Body>
      </div>

      {/* Title Component Examples */}
      <section className="space-y-6">
        <Title level={2}>Title Components</Title>
        <Body>The Title component provides semantic heading levels with proper weight variations.</Body>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <Title level={1}>Level 1 Title (H1)</Title>
            <Code inline>&lt;Title level={1}&gt;Level 1 Title&lt;/Title&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Title level={2} weight="semibold">Level 2 Semibold Title (H2)</Title>
            <Code inline>&lt;Title level={2} weight="semibold"&gt;Level 2 Title&lt;/Title&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Title level={3} weight="medium">Level 3 Medium Title (H3)</Title>
            <Code inline>&lt;Title level={3} weight="medium"&gt;Level 3 Title&lt;/Title&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Title level={4}>Level 4 Title (H4)</Title>
            <Code inline>&lt;Title level={4}&gt;Level 4 Title&lt;/Title&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Title level={5}>Level 5 Title (H5)</Title>
            <Code inline>&lt;Title level={5}&gt;Level 5 Title&lt;/Title&gt;</Code>
          </div>
        </div>
      </section>

      {/* Body Component Examples */}
      <section className="space-y-6">
        <Title level={2}>Body Text Components</Title>
        <Body>The Body component provides all body text sizes with optional semibold variants.</Body>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="xl">Extra Large Body Text - Perfect for introductions and lead paragraphs that need more visual weight.</Body>
            <Code inline>&lt;Body size="xl"&gt;Extra Large Body Text&lt;/Body&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="l">Large Body Text - The default size for most content. Provides excellent readability for extended reading.</Body>
            <Code inline>&lt;Body size="l"&gt;Large Body Text&lt;/Body&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="m">Medium Body Text - Ideal for secondary content, captions, and supporting information.</Body>
            <Code inline>&lt;Body size="m"&gt;Medium Body Text&lt;/Body&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="s">Small Body Text - Perfect for helper text, metadata, and compact layouts.</Body>
            <Code inline>&lt;Body size="s"&gt;Small Body Text&lt;/Body&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="xs">Extra Small Body Text - Used for fine print, timestamps, and minimal text elements.</Body>
            <Code inline>&lt;Body size="xs"&gt;Extra Small Body Text&lt;/Body&gt;</Code>
          </div>
        </div>
      </section>

      {/* Semibold Body Examples */}
      <section className="space-y-6">
        <Title level={3}>Semibold Body Text</Title>
        <Body>Use semibold variants to emphasize important content within body text.</Body>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="l" weight="semibold">Large Semibold Body Text - For emphasized content that needs attention.</Body>
            <Code inline>&lt;Body size="l" weight="semibold"&gt;Emphasized Text&lt;/Body&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Body size="m" weight="semibold">Medium Semibold Body Text - Perfect for important secondary information.</Body>
            <Code inline>&lt;Body size="m" weight="semibold"&gt;Important Text&lt;/Body&gt;</Code>
          </div>
        </div>
      </section>

      {/* Label and Code Examples */}
      <section className="space-y-6">
        <Title level={2}>Labels and Code</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Title level={3}>Label Components</Title>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <Label size="base">Base Label Text</Label>
              <Code inline>&lt;Label size="base"&gt;Label Text&lt;/Label&gt;</Code>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <Label size="sm">Small Label Text</Label>
              <Code inline>&lt;Label size="sm"&gt;Small Label&lt;/Label&gt;</Code>
            </div>
          </div>

          <div className="space-y-4">
            <Title level={3}>Code Components</Title>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <Body>This is <Code inline>inline code</Code> within text.</Body>
              <Code inline>&lt;Code inline&gt;inline code&lt;/Code&gt;</Code>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <Code>
{`function example() {
  return "block code";
}`}
              </Code>
              <Code inline>&lt;Code&gt;block code&lt;/Code&gt;</Code>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Typography Component */}
      <section className="space-y-6">
        <Title level={2}>Direct Typography Component</Title>
        <Body>For advanced use cases, use the Typography component directly with specific variants.</Body>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <Typography variant="title-5xl-semibold">Direct Typography Usage</Typography>
            <Code inline>&lt;Typography variant="title-5xl-semibold"&gt;Text&lt;/Typography&gt;</Code>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Typography variant="body-l-semibold" as="span">Custom element with typography</Typography>
            <Code inline>&lt;Typography variant="body-l-semibold" as="span"&gt;Text&lt;/Typography&gt;</Code>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <Title level={2}>Usage Guidelines</Title>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <Title level={4} className="text-green-700">Do</Title>
            <ul className="space-y-2 mt-4">
              <Body size="m" as="li">• Use semantic title levels (1-5) for proper document structure</Body>
              <Body size="m" as="li">• Choose appropriate body sizes based on content hierarchy</Body>
              <Body size="m" as="li">• Use semibold variants sparingly for emphasis</Body>
              <Body size="m" as="li">• Prefer the semantic components (Title, Body) over direct Typography</Body>
            </ul>
          </div>
          
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
            <Title level={4} className="text-red-700">Don't</Title>
            <ul className="space-y-2 mt-4">
              <Body size="m" as="li">• Skip heading levels (e.g., H1 directly to H3)</Body>
              <Body size="m" as="li">• Use title components for body content</Body>
              <Body size="m" as="li">• Override font families unless absolutely necessary</Body>
              <Body size="m" as="li">• Mix typography systems - stick to the design system</Body>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
};