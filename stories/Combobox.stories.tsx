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