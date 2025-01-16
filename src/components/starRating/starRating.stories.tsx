import type { Meta, StoryObj } from '@storybook/react';
import StarRating from '@components/starRating';

const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  argTypes: {
    defaultValue: {
      control: 'number',
      description: '초기 별점 값',
      defaultValue: 0,
    },
    readOnly: {
      control: 'boolean',
      description: '읽기 전용 여부',
      defaultValue: false,
    },
    size: {
      control: 'text',
      description: '별점 컨테이너 크기 조절',
      defaultValue: 'medium',
    },
    onChange: {
      action: 'changed',
      description: '별점이 변경될 때 호출되는 콜백',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    defaultValue: 0,
    readOnly: false,
    size: 'medium',
    onChange: (value: number) => console.log(`별점 변경: ${value}`),
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: 4,
    readOnly: true,
  },
};
