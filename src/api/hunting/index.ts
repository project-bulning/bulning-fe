import endpoints from '@constants/endpoints.ts';
import { HunterInfoPost } from '@/types/hunting';
import axiosInstance from '@/utils/network';

export async function submitHunterInfoForm(reportId: number, data: HunterInfoPost): Promise<void> {
  const url = `${endpoints.submitHunterInfo}?reportId=${reportId}`;

  await axiosInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function submitHunterAlarm(reportId: number): Promise<void> {
  const url = `${endpoints.alarmRequest}/${reportId}`;

  await axiosInstance.post(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
