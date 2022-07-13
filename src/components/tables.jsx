import React from "react";
import DataTable from "react-data-table-component";
import { MdOutlinePictureAsPdf, MdMap } from "react-icons/md";

const columns = [
  {
    name: "Type",
    selector: (row) => row.type,
    cell: (row) => {
      if (row.type === "pdf") {
        return <MdOutlinePictureAsPdf className="w-8 h-8 text-red-600" />;
      } else {
        return (
          <div className=" bg-bgthumbgreen rounded-md w-8 h-8 p-1">
            <MdMap className="w-full h-full text-white" />
          </div>
        );
      }
    },
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
];

const data = [
  {
    id: 1,
    type: "pdf",
    name: "NIB 98748578, Jakarta Selatan, 16534",
    date: "Jun, 22",
  },
  {
    id: 2,
    type: "shp",
    name: "764746777, 9893788, 287878",
    date: "May, 2",
  },
  {
    id: 3,
    type: "shp",
    name: "764746777, 9893788, 287878",
    date: "Apr, 29",
  },
  {
    id: 4,
    type: "pdf",
    name: "764746777, 9893788, 287878",
    date: "Apr, 12",
  },
  {
    id: 5,
    type: "pdf",
    name: "764746777, 9893788, 287878",
    date: "Mar, 10",
  },
];

function TestTable() {
  return <DataTable columns={columns} data={data} />;
}

export default TestTable;
