import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { columns } from "./constansts";
import { CategoryItem } from "./types";

const ItemsPage = () => {
  const [data, setData] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.dev.thedematerialised.com/api/nfts?limit=10&offset=0"
      );
      const categories = await res.json();

      setData(categories.list);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ItemsPage;
