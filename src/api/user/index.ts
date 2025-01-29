import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { MembershipResponse, MyInfoResponse } from '@/types/user';

export async function getMyInfo(): Promise<MyInfoResponse> {
  const response = await axiosInstance.get<MyInfoResponse>(endpoints.myInfo);
  return response.data;
}

export async function submitPersonalInfo(infoInput: MembershipResponse) {
  await axiosInstance.post(endpoints.submitPersonalInfo, infoInput);
}
