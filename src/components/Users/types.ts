export interface UserData {
  id: string;
  name: string;
}

export interface UserState {
  data: UserData[];
  isLoading: boolean;
  error: string;
}
