import { Meta, StoryObj } from '@storybook/react';
import infoSentAwaitPage from '@pages/hunterMatching/InfoSentAwaitPage';

const meta: Meta<typeof infoSentAwaitPage> = {
  title: 'Pages/HunterMatching/infoSentAwaitPage',
  component: infoSentAwaitPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof infoSentAwaitPage>;

export const infoSentAwaitScreenDefault: Story = {
  args: {

  },
};
