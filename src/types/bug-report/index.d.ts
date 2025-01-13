export interface BugReport {
  id: number;
  latitude: number;
  longitude: number;
  user_id: number;
  bug_image_url?: string | null;
  bug_type?: string | null;
  bug_size?: string | null;
  equipment?: string | null;
  price: number;
  note?: string | null;
  // created_at: Date;
  // status: BugReportStatus;
  title: string;
  // user: User;
  // matches: Match[];
}
