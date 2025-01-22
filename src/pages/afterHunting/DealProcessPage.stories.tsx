import { Meta, StoryObj } from '@storybook/react';
import DealProcessPage from '@pages/afterHunting/DealProcessPage';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof DealProcessPage> = {
  title: 'Pages/AfterHunt/DealProcessPage',
  component: DealProcessPage,
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

type Story = StoryObj<typeof DealProcessPage>;

export const DealProcessPageDefault: Story = {
  args: {},
};
