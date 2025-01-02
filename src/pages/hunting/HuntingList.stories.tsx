import type { Meta, StoryObj } from '@storybook/react';
import HuntingList from '@pages/hunting/HuntingList';

const meta: Meta<typeof HuntingList> = {
  title: 'pages/Hunting/HuntingList',
  component: HuntingList,
};

export default meta;
type Story = StoryObj<typeof HuntingList>;

export const Default: Story = {};
