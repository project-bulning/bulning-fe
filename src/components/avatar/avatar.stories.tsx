import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@components/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    css: { control: 'object' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const DefaultAvatar: Story = {
  args: {
  },
};
