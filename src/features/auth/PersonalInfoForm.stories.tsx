import type { Meta, StoryObj } from '@storybook/react';
import PersonalInfoForm from '@/features/auth/PersonalInfoForm';

const meta: Meta<typeof PersonalInfoForm> = {
  title: 'Features/PersonalInfoForm',
  component: PersonalInfoForm,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof PersonalInfoForm>;

export const Form: Story = {
  args: {
  },
};
