import { MdOutlinePictureAsPdf, MdMap } from "react-icons/md";

const dummydata = [
  {
    filetype: "pdf",
    filename: "Jakarta UMK scatter lorem lorem ipsumm ipsumm - 2022",
    date: "Jun 22",
  },
  {
    filetype: "shp",
    filename: "98999, 34333, 13222",
    date: "Jun 10",
  },
  {
    filetype: "pdf",
    filename: "Imigrasi Sumatera 2020",
    date: "Jun 2",
  },
  {
    filetype: "pdf",
    filename: "Jakarta UMK scatter - 2022",
    date: "May 20",
  },
  {
    filetype: "pdf",
    filename: "Jakarta UMK scatter - 2022",
    date: "May 20",
  },
  {
    filetype: "pdf",
    filename: "Jakarta UMK scatter - 2022",
    date: "May 20",
  },
  {
    filetype: "pdf",
    filename: "Jakarta UMK scatter - 2022",
    date: "May 20",
  },
];

const dummycolumns = [
  {
    Header: "File Type",
    accessor: "filetype",
    Cell: ({ row }) => {
      const data = row.original;

      if (data.filetype === "pdf") {
        return <MdOutlinePictureAsPdf className="w-6 h-6 text-red-600" />;
      } else {
        return (
          <div className=" bg-bgthumbgreen rounded-md w-6 h-6 p-1">
            <MdMap className="w-full h-full text-white" />
          </div>
        );
      }
    },
  },
  {
    Header: "File Name",
    accessor: "filename",
  },
  {
    Header: "Date",
    accessor: "date",
  },
];

export { dummycolumns, dummydata };
