import type { Meta, StoryObj } from '@storybook/react';
import KakaoMap from '@components/kakaoMap';

const meta: Meta<typeof KakaoMap> = {
  title: 'Components/KakaoMap',
  component: KakaoMap,
  argTypes: {
    latitude: {
      control: 'number',
      description: '지도의 중심 위도',
      defaultValue: 35.2309383,
    },
    longitude: {
      control: 'number',
      description: '지도의 중심 경도',
      defaultValue: 129.0825007,
    },
    type: {
      control: 'radio',
      options: ['range', 'marker'],
      description: '지도에 표시할 타입 (원 또는 마커)',
      defaultValue: 'marker',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof KakaoMap>;

export const DefaultMarker: Story = {
  args: {
    latitude: 35.2309383,
    longitude: 129.0825007,
    type: 'marker',
  },
};

export const RangeCircle: Story = {
  args: {
    latitude: 35.2309383,
    longitude: 129.0825007,
    type: 'range',
  },
};
