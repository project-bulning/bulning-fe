import type { Meta, StoryObj } from '@storybook/react';
import RequestHelpBanner from '@features/main/banner/RequestHelpBanner';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof RequestHelpBanner> = {
  title: 'features/Main/Banner/RequestHelpBanner',
  component: RequestHelpBanner,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RequestHelpBanner>;

export const Default: Story = {};
