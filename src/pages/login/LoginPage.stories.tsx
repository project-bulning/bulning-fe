import LoginPage from '@pages/login/LoginPage.tsx';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
};

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const LoginPageDefault: Story = {
  args: {

  },
};
