import { TableProps } from "./types";
import styles from "./styles.module.scss";

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <td key={column.title}>{column.title}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.title}>
                {typeof col.value === "function"
                  ? col.value(item)
                  : item[col.value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
