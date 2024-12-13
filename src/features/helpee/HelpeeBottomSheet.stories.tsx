import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import AnnouncementBottomSheet from './AnnouncementBottomSheet';
import CameraRequestBottomSheet from './CameraRequestBottomSheet';

export default {
  title: 'Features/HelpeeBottomSheet',
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
  },
} as Meta;

// Template for AnnouncementBottomSheet
const AnnouncementTemplate: Story = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button onClick={handleToggle}>Toggle Announcement Bottom Sheet</button>
      <AnnouncementBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

// Template for CameraRequestBottomSheet
const CameraRequestTemplate: Story = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button onClick={handleToggle}>Toggle Camera Request Bottom Sheet</button>
      <CameraRequestBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

// Stories
export const AnnouncementBottomSheetStory = AnnouncementTemplate.bind({});
AnnouncementBottomSheetStory.args = {
  isOpen: false,
};

export const CameraRequestBottomSheetStory = CameraRequestTemplate.bind({});
CameraRequestBottomSheetStory.args = {
  isOpen: false,
};
