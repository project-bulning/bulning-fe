import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { ReviewFormData } from '@/types/afterHunting';

export async function endHunting(matchId: number, cancel: boolean = false) {
  try {
    const tradeValue = cancel ? 0 : 1;
    const response = await axiosInstance.put(`${endpoints.endHunting}/${matchId}`, { trade: tradeValue });
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

export async function getHuntingPrice(matchId: number): Promise<number> {
  const url = `${endpoints.huntingPrice}/${matchId}/price`;

  try {
    const response = await axiosInstance.get<{ price: number }>(url);
    return response.data.price;
  } catch (error) {
    console.error('Error fetching hunting price:', error);
    throw error;
  }
}

export async function sendTradeCompleteNotification(matchId: number): Promise<void> {
  const url = `${endpoints.huntingTrade}/${matchId}`;

  try {
    await axiosInstance.post(url);
    console.log(`거래완료 알림 전송됨: ${matchId}`);
  } catch (error) {
    console.error('거래완료 알린 전송 에러:', error);
    throw error;
  }
}
