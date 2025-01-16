import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import MoveToQuickChatBottomSheet from '@features/hunterMatching/MoveToQuickChatBottomSheet';
import ConfirmCancelMatchingBottomSheet from '@features/hunterMatching/ConfirmCancelMatchingBottomSheet';
import { MemoryRouter } from 'react-router-dom';
import TermsBottomSheet from '@features/hunterMatching/TermsBottomSheet';

type Story = StoryObj<BottomSheetProps>;

export default {
  title: 'Features/HunterMatchingBottomSheet',
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

export const MoveToQuickChatBottomSheetStory: Story = {
  render: (args) => <BottomSheetTemplate {...args} />,
};
MoveToQuickChatBottomSheetStory.args = {
  isOpen: false,
  toggleText: 'Toggle Announcement Bottom Sheet',
  Component: MoveToQuickChatBottomSheet,
};

export const ConfirmCancelMatchingBottomSheetStory: Story = {
  render: (args) => <BottomSheetTemplate {...args} />,
};
ConfirmCancelMatchingBottomSheetStory.args = {
  isOpen: false,
  toggleText: 'Toggle Camera Request Bottom Sheet',
  Component: ConfirmCancelMatchingBottomSheet,
};

export const TermsBottomSheetStory: Story = {
  render: (args) => <BottomSheetTemplate {...args} />,
};
TermsBottomSheetStory.args = {
  isOpen: false,
  toggleText: 'Terms Bottom Sheet',
  Component: TermsBottomSheet,
};
