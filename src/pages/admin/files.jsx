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

  const openInNewTab = (url) => {
    let element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8");
    element.setAttribute("download", url);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="h-full bg-slate-100 overflow-y-auto lg:items-center">
      <div className="mx-3 my-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-100 bg-slate-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  License
                </th>
                <th scope="col" className="py-3 px-6">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {downloadList &&
                downloadList.map((row, i) => {
                  const tanggal = new Date(row.date);
                  const trDiv =
                    i % 2 === 0
                      ? "bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                      : "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";

                  return (
                    <tr className={trDiv} key={i}>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap dark:text-white"
                      >
                        {row.id_order}
                      </th>
                      <td className="py-4 px-6">
                        {`${
                          monthName[tanggal.getMonth()]
                        } ${tanggal.getDate()}`}
                      </td>
                      <td className="py-4 px-6">{row.license}</td>
                      <td className="p-4 text-center flex flex-col space-y-2">
                        <button
                          key={i}
                          className="border-2 border-sky-400 rounded-full px-3 py-1 text-xs border-2"
                          onClick={() => openInNewTab(row.file)}
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyFiles;
