import type { Meta, StoryObj } from '@storybook/react';
import { HeaderWithIcon, HeaderWithLogo } from '@components/header/variants';
import Header from '@/components/header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderDefault: Story = {
  args: {
    title: '회원가입',
  },
};

export const LogoHeader: Story = {
  render: () => (
    <HeaderWithLogo />
  ),
};

export const IconHeader: Story = {
  render: () => (
    <HeaderWithIcon iconType="backward" onClick={() => console.log('click')} />
  ),
};
