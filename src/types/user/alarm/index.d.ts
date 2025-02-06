export interface UserAlarmResponse {
  role: 'helpee' | 'hunter';
  status: 'PEDNING' | 'MATCH_ACCEPTED';
  matchId: number;
  hunterId: number;
  type: 'hunter_applied' | 'hunter_accepted';
}
