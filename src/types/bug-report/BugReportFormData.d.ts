export interface BugReportFormData {
  latitude: number;
  longitude: number;
  bug_image_url?: string | null;
  title: string;
  location: string;
  location_detail: string;
  bug_type: string;
  bug_size: string;
  equipment: string;
  note: string;
  price: number;
}
