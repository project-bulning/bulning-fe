import LoginPage from '@pages/login/LoginPage';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/Login/LoginPage',
  component: LoginPage,
};

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const LoginPageDefault: Story = {
  args: {

  },
};
