import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import HuntEndBottomSheet from '@features/afterHunting/HuntEndBottomSheet';
import { MemoryRouter } from 'react-router-dom';

type Story = StoryObj<BottomSheetProps>;

export default {
  title: 'Features/HuntEndBottomSheet',
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
  },
} as Meta;

interface BottomSheetProps {
  isOpen: boolean;
  toggleText: string;
  Component: React.FC<{ isOpen: boolean; onClose: () => void }>;
}

function BottomSheetTemplate({
  isOpen: initialIsOpen,
  toggleText,
  Component,
}: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <MemoryRouter>
      <button type="button" onClick={handleToggle}>
        {toggleText}
      </button>
      <Component isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </MemoryRouter>
  );
}

export const HuntEndBottomSheetStory: Story = {
  render: (args) => <BottomSheetTemplate {...args} />,
};
HuntEndBottomSheetStory.args = {
  isOpen: false,
  toggleText: 'Open Hunt End Bottom Sheet',
  Component: HuntEndBottomSheet,
};
