import { Meta, StoryObj } from '@storybook/react';
import HunterInfoInputPage from '@pages/hunting/HunterInfoInputPage';

const meta: Meta<typeof HunterInfoInputPage> = {
  title: 'Pages/HunterInfoInputPage',
  component: HunterInfoInputPage,
};

export default meta;

type Story = StoryObj<typeof HunterInfoInputPage>;

export const BugInputPageDefault: Story = {
  args: {

  },
};
