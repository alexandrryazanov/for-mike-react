import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
