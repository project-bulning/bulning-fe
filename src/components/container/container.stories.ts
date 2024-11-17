import type { Meta, StoryObj } from '@storybook/react';
import Container from '.';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    width: '100%',
    height: 'auto',
    gap: '10px',
    padding: '20px',
    boxSizing: 'border-box',
  },
};

export const ColumnLayout: Story = {
  args: {
    direction: 'column',
    justify: 'space-between',
    align: 'center',
    width: '100%',
    height: '400px',
    gap: '20px',
    padding: '20px',
    boxSizing: 'border-box',
  },
};

export const CustomWidthHeight: Story = {
  args: {
    width: '400px',
    height: '300px',
    padding: '10px',
  },
};

export const CustomStyles: Story = {
  args: {
    cssOverride: {
      border: '2px solid black',
      borderRadius: '10px',
      backgroundColor: '#f0f0f0',
    },
    padding: '20px',
  },
};
