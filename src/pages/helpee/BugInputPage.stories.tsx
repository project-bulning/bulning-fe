import { Meta, StoryObj } from '@storybook/react';
import BugInputPage from '@pages/helpee/BugInputPage';

const meta: Meta<typeof BugInputPage> = {
  title: 'Pages/BugInputPage',
  component: BugInputPage,
};

export default meta;

type Story = StoryObj<typeof BugInputPage>;

export const BugInputPageDefault: Story = {
  args: {

  },
};
