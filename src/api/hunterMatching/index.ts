import endpoints from '@constants/endpoints.ts';
import axios from 'axios';
import axiosInstance from '@/utils/network';
import { HunterInfo, HunterLocationInfo } from '@/types/hunterMatching';

export async function fetchHunterInfo(userId: number): Promise<HunterInfo> {
  const url = `${endpoints.getHunterInfo}/${userId}`;

  const response = await axiosInstance.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function updateMatchStatus(matchId: number, accept: boolean): Promise<void> {
  const url = `${endpoints.updateMatchStatus}/${matchId}`;

  await axiosInstance.put(url, { accept }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function uploadHunterImage(image: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', image);

  const url = `${endpoints.uploadHunterImage}`;
  const response = await axiosInstance.post<{ image_url: string }>(
    url,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data.image_url;
}

export async function saveHunterImage(imageUrl: string): Promise<void> {
  const url = `${endpoints.submitHunterImage}`;
  await axiosInstance.post(
    url,
    { img_url: imageUrl },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function getHunterLocation(
  currentX: number,
  currentY: number,
): Promise<HunterLocationInfo> {
  const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${currentX}&y=${currentY}`;
  const apiKey = import.meta.env.VITE_REST_API_KEY;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('주소 정보를 가져오는 중 오류 발생:', error);
    throw error;
  }
}
