import { Meta, StoryObj } from '@storybook/react';
import HuntingListDetailPage from '@pages/hunting/HuntingListDetailPage';

const meta: Meta<typeof HuntingListDetailPage> = {
  title: 'Pages/Hunting/HuntingListDetailPage',
  component: HuntingListDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HuntingListDetailPage>;

export const HuntingListDetailPageDefault: Story = {
  args: {

  },
};
