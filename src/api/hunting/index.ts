import endpoints from '@constants/endpoints.ts';
import { HunterInfo } from '@/types/hunting';
import axiosInstance from '@/utils/network';

export async function submitHunterInfoForm(reportId: number, data: HunterInfo): Promise<void> {
  const url = `${endpoints.submitHunterInfo}?reportId=${reportId}`;

  await axiosInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
