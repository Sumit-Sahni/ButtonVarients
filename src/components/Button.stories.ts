import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
   argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'first',
  children: 'first Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'second',
  children: 'second Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'third',
  children: 'third button',
};
