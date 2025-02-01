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
