import { Meta, StoryObj } from '@storybook/react';
import InfoSentAwaitPage from '@pages/hunterMatching/InfoSentAwaitPage';

const meta: Meta<typeof InfoSentAwaitPage> = {
  title: 'Pages/HunterMatching/InfoSentAwaitPage',
  component: InfoSentAwaitPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InfoSentAwaitPage>;

export const InfoSentAwaitPageDefault: Story = {
  args: {

  },
};
