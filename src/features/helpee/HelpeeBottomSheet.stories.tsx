import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BugInputPage from '@pages/helpee/BugInputPage';
import AnnouncementBottomSheet from './AnnouncementBottomSheet';
import CameraRequestBottomSheet from './CameraRequestBottomSheet';

type Story = StoryObj<typeof BugInputPage>;

export default {
  title: 'Features/HelpeeBottomSheet',
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
  },
} as Meta;

interface BottomSheetProps {
  isOpen: boolean;
}

// @ts-ignore
// eslint-disable-next-line react/function-component-definition,react/prop-types
const AnnouncementTemplate: Story<BottomSheetProps> = ({ isOpen: initialIsOpen }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const handleToggle = () => setIsOpen((prev: any) => !prev);

  return (
    <>
      <button type="button" onClick={handleToggle}>
        Toggle Announcement Bottom Sheet
      </button>
      <AnnouncementBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

// @ts-ignore
// eslint-disable-next-line react/function-component-definition,react/prop-types
const CameraRequestTemplate: Story<BottomSheetProps> = ({ isOpen: initialIsOpen }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const handleToggle = () => setIsOpen((prev: any) => !prev);

  return (
    <>
      <button type="button" onClick={handleToggle}>
        Toggle Camera Request Bottom Sheet
      </button>
      <CameraRequestBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const AnnouncementBottomSheetStory = AnnouncementTemplate.bind({});
AnnouncementBottomSheetStory.args = {
  isOpen: false,
};

export const CameraRequestBottomSheetStory = CameraRequestTemplate.bind({});
CameraRequestBottomSheetStory.args = {
  isOpen: false,
};
