import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AnnouncementBottomSheet, { AnnouncementBottomSheetProps } from '@features/helpee/AnnouncementBottomSheet';
import CameraRequestBottomSheet, { CameraRequestBottomSheetProps } from '@features/helpee/CameraRequestBottomSheet';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Features/HelpeeBottomSheet',
} as Meta;

const AnnouncementTemplate: StoryObj<AnnouncementBottomSheetProps> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <MemoryRouter>
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          Toggle Announcement Bottom Sheet
        </button>
        <AnnouncementBottomSheet
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </MemoryRouter>
    );
  },
};

export const AnnouncementStory = {
  ...AnnouncementTemplate,
  args: {
    isOpen: false,
    // formData: { ... },
    // bugImage: 'https://...',
  },
};

const CameraRequestTemplate: StoryObj<CameraRequestBottomSheetProps> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <MemoryRouter>
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          Toggle Camera Request Bottom Sheet
        </button>
        <CameraRequestBottomSheet
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </MemoryRouter>
    );
  },
};

export const CameraRequestStory = {
  ...CameraRequestTemplate,
  args: {
    isOpen: false,
  },
};
