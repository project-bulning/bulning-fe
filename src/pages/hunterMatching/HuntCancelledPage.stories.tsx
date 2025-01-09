import { Meta, StoryObj } from '@storybook/react';
import HuntCancelledPage from '@pages/hunterMatching/HuntCancelledPage';

const meta: Meta<typeof HuntCancelledPage> = {
  title: 'Pages/HunterMatching/HuntCancelledPage',
  component: HuntCancelledPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HuntCancelledPage>;

export const HuntCancelledPageDefault: Story = {
  args: {

  },
};
