import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { columns } from "./constansts";
import { CategoryItem } from "./types";

const CategoriesPage = () => {
  const [data, setData] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.dev.thedematerialised.com/api/categories?limit=10&offset=0"
      );
      const categories = await res.json();

      setData(categories);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <Table<CategoryItem> data={data} columns={columns} />
    </div>
  );
};

export default CategoriesPage;
