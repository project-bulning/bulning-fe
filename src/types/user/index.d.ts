export interface User {
  id: number;
  name: string;
  nickname: string;
  phone_number: string | null;
  location: string;
  gender: string;
  role: string | null;
  hunt_count: number | null;
  age_group: string;
  created_at: string;
  updated_at: string;
  fcm_token: string;
  pr_memo: string;
  location_detail: string;
  match: {
    id: number;
    bug_report_id: number;
    helper_id: number;
    hunter_id: number;
    status: string;
    created_at: string;
    resolved_at: string | null;
  } | null;
}

export type MyInfoResponse = User;
export type MembershipResponse = Pick<User, 'nickname' | 'location'>;
