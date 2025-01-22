export interface BugReport {
  id: number;
  title: string;
  created_at: string;
  status: string;
  bug_image_url: string | null;
  price: number;
  location: string;
}

export interface DetailedBugReport extends BugReport {
  latitude: number;
  longitude: number;
  user_id: number;
  bug_type: string;
  bug_size: string;
  equipment: string;
  note: string;
}

export interface BugReportListResponse {
  bug_reports: BugReport[];
}
export interface BugReportDetailResponse {
  bug_report: DetailedBugReport;
}
