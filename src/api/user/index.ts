import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { MembershipResponse, MyInfoResponse } from '@/types/user';
import { UserAlarmResponse } from '@/types/user/alarm';
import { MyInfoResponse } from '@/types/user';

export async function getMyInfo(): Promise<MyInfoResponse> {
  const response = await axiosInstance.get<MyInfoResponse>(endpoints.myInfo);
  return response.data;
}

export async function submitPersonalInfo(infoInput: MembershipResponse) {
  await axiosInstance.post(endpoints.submitPersonalInfo, infoInput);
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
