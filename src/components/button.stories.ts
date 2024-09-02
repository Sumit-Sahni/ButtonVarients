import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

// Meta configuration
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['first', 'second', 'third'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

// Template definition using StoryObj
type Story = StoryObj<typeof Button>;

export const First: Story = {
  args: {
    variant: 'first',
    children: 'First Button',
  },
};

export const Second: Story = {
  args: {
    variant: 'second',
    children: 'Second Button',
  },
};

export const Third: Story = {
  args: {
    variant: 'third',
    children: 'Third Button',
  },
};
