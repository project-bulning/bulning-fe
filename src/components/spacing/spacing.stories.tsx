import type { Meta, StoryObj } from '@storybook/react';
import Spacing from '.';

/* eslint-disable */

const meta = {
  title: 'Components/Spacing',
  component: Spacing,
  argTypes: {
    height: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "16px",
  },
  tags: ['autodocs'],
};

export const ResponsiveHeight: Story = {
  args: {
    height: {
      initial: "16px",
      sm: "32px",
      md: "48px",
      lg: "64px",
    },
  },
};
