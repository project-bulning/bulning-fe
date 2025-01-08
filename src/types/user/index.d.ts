export interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
  location: string;
}

export type MyInfoResponse = User;
export type MembershipResponse = Omit<Partial<User>, 'id' | 'email'>;
