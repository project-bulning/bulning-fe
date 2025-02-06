import endpoints from '@constants/endpoints.ts';
import { UserInfoPost } from '@/types/hunting';
import axiosInstance from '@/utils/network';
import { HunterInfo } from '@/types/user/hunter';

export async function submitInfoForm(data: UserInfoPost): Promise<void> {
  const url = `${endpoints.submitHunterInfo}`;

  await axiosInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function submitHunterInfoForm(
  reportId: number,
  img_url: string,
  data: HunterInfo,
): Promise<void> {
  const url = `${endpoints.submitHunterInfo}?reportId=${reportId}`;

  await axiosInstance.post(url, {
    ...data,
    img_url,
  }, {
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

export async function deleteBugReport(reportId: number): Promise<void> {
  const url = `https://buln.ing/api/bug-reports/${reportId}`;

  await axiosInstance.delete(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
