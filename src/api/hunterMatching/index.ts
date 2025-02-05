import endpoints from '@constants/endpoints.ts';
import axiosInstance from '@/utils/network';
import { HunterInfo } from '@/types/hunterMatching';

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
