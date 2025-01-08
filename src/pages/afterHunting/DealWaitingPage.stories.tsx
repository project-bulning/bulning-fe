import { Meta, StoryObj } from '@storybook/react';
import DealWaitingPage from '@pages/afterHunting/DealWaitingPage';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof DealWaitingPage> = {
  title: 'Pages/AfterHunt/DealWaitingPage',
  component: DealWaitingPage,
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

type Story = StoryObj<typeof DealWaitingPage>;

export const DealWaitingPageDefault: Story = {
  args: {},
};
