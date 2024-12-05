import type { Meta, StoryObj } from '@storybook/react';
import CatchRequestList from '@features/main/CatchRequestList';

const meta: Meta<typeof CatchRequestList> = {
  title: 'features/Main/CatchRequestList',
  component: CatchRequestList,
};

export default meta;
type Story = StoryObj<typeof CatchRequestList>;

export const Default: Story = {};
