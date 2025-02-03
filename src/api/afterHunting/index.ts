import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';

export async function endHunting(matchId: number) {
  try {
    const response = await axiosInstance.put(`${endpoints.endHunting}/${matchId}`, { trade: 1 });
    return response?.data;
  } catch (error) {
    console.error('Error ending hunting:', error);
    throw error;
  }
}
