import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { MyInfoResponse } from '@/types/user';
import { UserAlarmResponse } from '@/types/user/alarm';

export async function getMyInfo(): Promise<MyInfoResponse> {
  const response = await axiosInstance.get<MyInfoResponse>(endpoints.myInfo);
  return response.data;
}

export async function getUserAlarmInfo(): Promise<UserAlarmResponse | null> {
  try {
    const response = await axiosInstance.get<UserAlarmResponse | null>(endpoints.userAlarmInfo);
    return response.data;
  } catch (error) {
    console.error('Error fetching user alarm info:', error);
    return null;
  }
}
