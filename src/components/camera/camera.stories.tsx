import Camera from '@components/camera';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Camera> = {
  title: 'Components/Camera',
  component: Camera,
  argTypes: {
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Camera>;

export const DefaultCamera: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button style={{ position: 'absolute' }} onClick={() => setIsOpen(true)} type="button">open</button>
        {
          isOpen
            && <Camera onCapture={(blob) => console.log(blob)} />
        }
      </>
    );
  },
};
