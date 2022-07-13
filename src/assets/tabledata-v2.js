const data = [
  {
    filetype: "pdf",
    product: "Tanah di Kebayoran",
    category: "Tanah",
    payment: "Rp 20,000",
    date: "Jun 22",
  },
  {
    filetype: "shp",
    product: "Rumah di Bekasi",
    category: "Rumah",
    payment: "Rp 10,000",
    date: "Jun 15",
  },
  {
    filetype: "shp",
    product: "Kavling Jagakarsa",
    category: "Tanah",
    payment: "Rp 30,000",
    date: "Jun 10",
  },
  {
    filetype: "pdf",
    product: "Rumah di Bekasi",
    category: "Rumah",
    payment: "Rp 10,000",
    date: "May 22",
  },
  {
    filetype: "pdf",
    product: "Rumah di Bekasi",
    category: "Rumah",
    payment: "Rp 10,000",
    date: "May 15",
  },
];

const columns = [
  {
    Header: "Type",
    accessor: "filetype",
  },
  {
    Header: "Product",
    accessor: "product",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Payment",
    accessor: "payment",
  },
  {
    Header: "Date",
    accessor: "date",
  },
];

export { columns, data };
