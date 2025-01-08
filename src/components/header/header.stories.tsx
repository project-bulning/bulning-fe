import type { Meta, StoryObj } from '@storybook/react';
import Header from '@components/header';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
