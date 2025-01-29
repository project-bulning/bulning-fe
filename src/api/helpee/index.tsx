import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { BugReportFormData } from '@/types/bug-report/BugReportFormData';

export async function uploadImage(image: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', image);

  const response = await axiosInstance.post<{ image_url: string }>(
    endpoints.bugReports.uploadImage,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data.image_url;
}

export async function submitBugReportsForm(data: BugReportFormData): Promise<void> {
  await axiosInstance.post(endpoints.bugReports.create, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
