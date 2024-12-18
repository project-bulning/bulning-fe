import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@components/iconButton/index';
import AlarmIcon from '@assets/icons/alarm.svg?react';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const DefaultIconButton: Story = {
  args: {
    icon: <AlarmIcon />,
    ariaLabel: 'Alarm Icon',
  },
};

export const ClickableIconButton: Story = {
  args: {
    icon: <AlarmIcon />,
    ariaLabel: 'Clickable Alarm Icon',
    onClick: () => alert('IconButton clicked!'),
  },
};
