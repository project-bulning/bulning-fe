export interface UserReview {
  score: number;
  review_note: string;
  merit: string[];
  created_at: string;
}

export interface HunterInfo {
  name: string;
  location: string;
  location_detail: string;
  gender: string;
  age_group: string;
  avg_score: number;
  trade_count: number;
  user_reviews: UserReview[];
  pr_memo: string;
  match_id: number;
}
