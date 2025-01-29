import endpoints from '@constants/endpoints.ts';
import { BugReportListResponse, DetailedBugReport } from '@/types/bug-report';
import axiosInstance from '@/utils/network';

interface GetBugReportListParams {
  currentLatitude?: number;
  currentLongitude?: number;
}

export async function getBugReportList({
  currentLatitude = 0,
  currentLongitude = 0,
}: GetBugReportListParams = {}): Promise<BugReportListResponse> {
  const response = await axiosInstance.get<BugReportListResponse>(endpoints.bugReports, {
    params: {
      currentLatitude,
      currentLongitude,
    },
  });
  return response.data;
}

export async function getBugReportDetail(id: number): Promise<DetailedBugReport> {
  const response = await axiosInstance.get<DetailedBugReport>(`${endpoints.bugReports}/${id}`);
  return response.data;
}
