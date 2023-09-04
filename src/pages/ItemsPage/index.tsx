import React, { useState } from "react";
import Table from "../../components/Table";
import {columns} from "./constansts";

const ItemsPage = () => {

  const [data, setData] = useState([]);

  // fetch data

  return (
    <div>
      <h1>Items</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ItemsPage;
