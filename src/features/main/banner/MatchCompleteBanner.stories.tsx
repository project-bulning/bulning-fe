import type { Meta, StoryObj } from '@storybook/react';
import MatchCompleteBanner from '@features/main/banner/MatchCompleteBanner';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof MatchCompleteBanner> = {
  title: 'features/Main/Banner/MatchCompleteBanner',
  component: MatchCompleteBanner,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MatchCompleteBanner>;

export const Default: Story = {};
