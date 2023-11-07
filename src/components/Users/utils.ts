import { USERS_URL } from "./constants";
import { UserData } from "./types";

export const loadUsers = async ({
  onChangeLoading,
  onError,
  onSuccess,
}: {
  onChangeLoading: (loading: boolean) => void;
  onSuccess: (data: UserData[]) => void;
  onError: (e: string) => void;
}) => {
  try {
    onChangeLoading(true);

    const response = await fetch(USERS_URL);
    const data = await response.json();

    onChangeLoading(false);
    onSuccess(data);
  } catch (e) {
    onChangeLoading(false);
    onError("Не удалось загрузить");
  }
};
