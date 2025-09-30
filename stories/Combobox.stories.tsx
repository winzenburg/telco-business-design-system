import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '../src/components/ui/combobox';
import { useState } from 'react';
import ComboboxDocs from './Combobox.mdx';

const meta: Meta<typeof Combobox> = {
  title: 'Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      page: ComboboxDocs,
      description: {
        component: 'A searchable select component built on Command and Popover with design system tokens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
      />
    );
  },
};

export const WithPreselectedValue: Story = {
  render: () => {
    const [value, setValue] = useState<string>("next.js");
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<string>("next.js");
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        disabled={true}
      />
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    const optionsWithDisabled = [
      ...frameworks.slice(0, 3),
      { value: "remix", label: "Remix", disabled: true },
      { value: "astro", label: "Astro (Coming Soon)", disabled: true },
      ...frameworks.slice(5),
    ];

    return (
      <Combobox
        options={optionsWithDisabled}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
      />
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
        width="w-[300px]"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    return (
      <div className="space-y-2">
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select framework..."
          searchPlaceholder="Search frameworks..."
          error={true}
        />
        <p className="text-sm text-[var(--ds-color-intent-destructive)]">
          Please select a framework
        </p>
      </div>
    );
  },
};

// Overview showing all variants on one page
export const AllVariants: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("next.js");
    const [value3, setValue3] = useState<string>("next.js");
    const [value4, setValue4] = useState<string>("");
    const [value5, setValue5] = useState<string>("");
    const [value6, setValue6] = useState<string>("");

    const optionsWithDisabled = [
      ...frameworks.slice(0, 3),
      { value: "remix", label: "Remix", disabled: true },
      { value: "astro", label: "Astro (Coming Soon)", disabled: true },
      ...frameworks.slice(5),
    ];

    return (
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Default</h3>
          <Combobox
            options={frameworks}
            value={value1}
            onValueChange={setValue1}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Preselected Value</h3>
          <Combobox
            options={frameworks}
            value={value2}
            onValueChange={setValue2}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled</h3>
          <Combobox
            options={frameworks}
            value={value3}
            onValueChange={setValue3}
            placeholder="Select framework..."
            disabled={true}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Disabled Options</h3>
          <Combobox
            options={optionsWithDisabled}
            value={value4}
            onValueChange={setValue4}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Error</h3>
          <Combobox
            options={frameworks}
            value={value5}
            onValueChange={setValue5}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
            error={true}
          />
          <p className="text-sm text-[var(--ds-color-intent-destructive)]">
            Please select a framework
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Custom Width (300px)</h3>
          <Combobox
            options={frameworks}
            value={value6}
            onValueChange={setValue6}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
            width="w-[300px]"
          />
        </div>
      </div>
    );
  },
};