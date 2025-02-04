import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { ReviewFormData } from '@/types/afterHunting';

export async function endHunting(matchId: number) {
  try {
    const response = await axiosInstance.put(`${endpoints.endHunting}/${matchId}`, { trade: 1 });
    return response?.data;
  } catch (error) {
    console.error('Error ending hunting:', error);
    throw error;
  }
}

export async function submitReview(matchId: number, data: ReviewFormData): Promise<void> {
  const url = `${endpoints.review}/${matchId}`;

  await axiosInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
