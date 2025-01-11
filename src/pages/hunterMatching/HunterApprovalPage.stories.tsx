import { Meta, StoryObj } from '@storybook/react';
import HunterApprovalPage from '@pages/hunterMatching/HunterApprovalPage';

const meta: Meta<typeof HunterApprovalPage> = {
  title: 'Pages/HunterMatching/HunterApprovalPage',
  component: HunterApprovalPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HunterApprovalPage>;

export const HuntCancelledPageDefault: Story = {
  args: {

  },
};
