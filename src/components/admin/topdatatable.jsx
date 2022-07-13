import React, { useMemo } from "react";
import { useTable } from "react-table";

function TopdataTable() {
  const data = useMemo(
    () => [
      {
        id: 1,
        product: "Tanah di Pondok Indah",
        seo: "9821",
        rating: "85%",
      },
      {
        id: 2,
        product: "Tanah di Jakarta Barat",
        seo: "7899",
        rating: "79%",
      },
      {
        id: 3,
        product: "Tanah di Bandung",
        seo: "7788",
        rating: "78%",
      },
      {
        id: 4,
        product: "Rumah di Bekasi",
        seo: "6456",
        rating: "70%",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "product",
      },
      {
        Header: "Search",
        accessor: "seo",
      },
      {
        Header: "Rating",
        accessor: "rating",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-500">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TopdataTable;
