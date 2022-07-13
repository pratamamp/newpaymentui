const topData = [
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
];

const topColumns = [
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
];

export { topData, topColumns };
