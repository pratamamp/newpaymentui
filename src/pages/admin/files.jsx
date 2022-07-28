import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";

function MyFiles() {
  const API_URL = process.env.REACT_APP_API_EXTRACT;
  const auth = useAuth();
  let currentUser = jwtDecode(auth.user.token).data;
  const [downloadList, setList] = useState();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const getData = async () => {
      await axios
        .post(API_URL + "/api/user/" + currentUser.id)
        .then(function (response) {
          setList(response.data);
        });
    };

    getData();

    return () => {
      console.log("cleanup");
    };
  }, []);
  return (
    <div className="h-full bg-slate-100 overflow-y-auto lg:items-center">
      <button className="border-2 bg-white rounded-md m-10 text-xs px-4 py-1 bg-blue-500 text-white">
        Sync All
      </button>
      <div className="overflow-x-auto relative mx-10 h-[calc(100vh_-_15rem)] shadow-md sm:rounded-lg lg:overflow-y-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-100 uppercase bg-slate-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Order
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                License
              </th>
              <th scope="col" className="py-3 px-6">
                PDF file
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                SHP file
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          {downloadList && console.log(downloadList)}
          <tbody>
            {downloadList &&
              downloadList.map((row, i) => {
                const tanggal = new Date(row.date);
                return (
                  <tr
                    key={i}
                    className="text-slate-400 border-b hover:bg-gray-50 dark:hover:bg-gray-300"
                  >
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      {row.id_order}
                    </th>
                    {}
                    <td className="py-4 px-6">
                      {`${monthName[tanggal.getMonth()]} ${tanggal.getDate()}`}
                    </td>
                    <td className="py-4 px-6">{row.license}</td>
                    <td className="py-4 px-6">
                      {row.pdf.map((pdf) => {
                        return (
                          <button className="w-full bg-red-500 rounded-full px-3 py-1 text-white">
                            Download
                          </button>
                        );
                      })}
                    </td>
                    <td className="py-4 px-6">
                      <button className="w-full bg-green-500 rounded-full px-3 py-1 text-white">
                        Download
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <a href="#">
                        <BsThreeDotsVertical />
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyFiles;
