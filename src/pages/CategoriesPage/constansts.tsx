import { ColumnType } from "../../components/Table/types";
import { CategoryItem } from "./types";

export const columns: ColumnType<CategoryItem>[] = [
  {
    title: "айди",
    value: "id",
  },
  {
    title: "Имя",
    value: "name",
  },
  {
    title: "Год",
    value: (item) => (
      <div style={{ color: "red" }}>
        {new Date(item.createdAt).getFullYear()}
      </div>
    ),
  },
];
