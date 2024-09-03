import type { Meta, StoryObj } from '@storybook/react';
import { HomeIcon } from 'lucide-react'; // Assuming you're using this icon
import Button from "../components/Button"; // Make sure this path is correct

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'third'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    Icon: {
      control: false, // We don't want a UI control for icons in this case
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
    Icon: HomeIcon, // Add your desired icon
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
    Icon: HomeIcon, // Add your desired icon
  },
};

export const Third: Story = {
  args: {
    variant: 'third',
    size: 'md',
    children: 'Third Button',
    Icon: HomeIcon, // Add your desired icon
  },
};
