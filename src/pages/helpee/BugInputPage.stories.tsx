import { Meta, StoryObj } from '@storybook/react';
import BugInputPage from '@pages/helpee/BugInputPage';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof BugInputPage> = {
  title: 'Pages/BugInputPage',
  component: BugInputPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BugInputPage>;

export const BugInputPageDefault: Story = {
  args: {

  },
};
