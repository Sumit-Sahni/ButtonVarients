import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
import { Shield} from 'lucide-react';
import { text } from 'body-parser';


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
    icon: {
        control: false, 
      },
      width: {
        control: {
          type: 'text', 
        },
        defaultValue: '200', 
      }, 
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const First: Story = {
  args: {
    variant: 'first',
    children: 'First Button',
    icon:Shield,
    width:200
  },
};

export const Second: Story = {
  args: {
    variant: 'second',
    children: 'Second Button',
    icon: Shield,
    width:200
  },
};

export const Third: Story = {
  args: {
    variant: 'third',
    children: 'Third Button',
    icon:Shield,
    width:200
  },
};
