import React from "react";
import useQuery from "../../../hooks/useQuery";
import { getUsers } from "../../../api/requests";
import { User } from "../../../api/types";

const TestComponent2 = () => {
  const { data, isLoading } = useQuery<User[]>({ fetchFunction: getUsers });

  if (isLoading) return <div>Loading...</div>;
  if (!data?.length) return <div>"No data =(</div>;

  return <div>Юзер 2: {data[1].name}</div>;
};

export default TestComponent2;
