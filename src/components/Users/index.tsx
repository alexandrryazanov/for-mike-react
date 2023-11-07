import React, { JSX, useEffect, useState } from "react";
import { UserData, UserState } from "./types";
import { USERS_URL } from "./constants";

const Users = ({
  children,
}: {
  children: (o: {
    data: UserData[];
    isLoading: boolean;
    error: string;
  }) => JSX.Element;
}) => {
  const [{ data, isLoading, error }, setState] = useState<UserState>({
    data: [],
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setState({ data: [], isLoading: true, error: "" });
        const response = await fetch(USERS_URL);
        const data = await response.json();
        setState({ data, isLoading: false, error: "" });
      } catch (e) {
        setState({ data: [], isLoading: false, error: "Не удалось загрузить" });
      }
    })();
  }, []);

  return (
    <>
      <h1>USERS</h1>
      {children({ data, isLoading, error })}
    </>
  );
};

export default Users;
