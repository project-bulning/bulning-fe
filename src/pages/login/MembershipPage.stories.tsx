import { Meta, StoryObj } from '@storybook/react';
import MembershipPage from '@pages/login/MembershipPage';

const meta: Meta<typeof MembershipPage> = {
  title: 'Pages/Login/MembershipPage',
  component: MembershipPage,
};

export default meta;

type Story = StoryObj<typeof MembershipPage>;

export const MembershipPageDefault: Story = {
  args: {

  },
};
