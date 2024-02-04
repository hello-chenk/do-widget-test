import type { Meta, StoryObj } from '@storybook/react';

import Round from './Round';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Round> = {
  component: Round,

};

export default meta;
type Story = StoryObj<typeof Round>;

export const Primary: Story = {
  args: {
    color: 'red',
    children: 'hello'
  },
};

export const FirstStory: Story = {
  args: {
    ...Primary.args
    //👇 The args you need here will depend on your component
  },
};