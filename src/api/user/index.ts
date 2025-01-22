import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { MyInfoResponse } from '@/types/user';

export async function getMyInfo(): Promise<MyInfoResponse> {
  const response = await axiosInstance.get<MyInfoResponse>(endpoints.myInfo);
  return response.data;
}
