export interface BugReport {
  id: number;
  title: string;
  created_at: string;
  status: string;
  bug_image_url: string | null;
  price: number;
  location: string;
  distance: number;
}

export interface DetailedBugReport extends BugReport {
  latitude: number;
  longitude: number;
  location_detail: string;
  user_id: number;
  bug_type: string;
  bug_size: string;
  equipment: string;
  note: string;
  name: string;
}

export interface BugReportListResponse {
  bug_reports: BugReport[];
}
export interface BugReportDetailResponse {
  DetailedBugReport;
}
