import { Meta, StoryObj } from '@storybook/react';
import TempChatPage from '@pages/afterHunting/TempChatPage';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof TempChatPage> = {
  title: 'Pages/AfterHunt/TempChatPage',
  component: TempChatPage,
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

type Story = StoryObj<typeof TempChatPage>;

export const TempChatPageDefault: Story = {
  args: { },
};
