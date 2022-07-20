import React, { useMemo } from "react";
import { RiWalletLine, RiMessage2Line } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
import { IoIosArrowDropright } from "react-icons/io";
import { MdMap } from "react-icons/md";
import { dummycolumns, dummydata } from "../../assets/tabledata";
import { topColumns, topData } from "../../assets/tabletopsearchdata";
import TableTransaction from "../../components/admin/tables/transactions";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BoardHome() {
  const data = useMemo(() => dummydata, []);
  const column = useMemo(() => dummycolumns, []);
  const tdata = useMemo(() => topData, []);
  const tcols = useMemo(() => topColumns, []);
  const navigate = useNavigate();

  const onAddItem = (e) => {
    e.preventDefault();
    navigate("/admin/map");
  };
  return (
    <div className="h-[calc(100vh_-_5rem)] bg-[#F4F7FE]/80 overflow-y-auto no-scrollbar lg:flex">
      <div className="no-scrollbar lg:w-2/3 lg:mt-4 lg:overflow-y-auto">
        <div className="px-4 mt-2 flex flex-col">
          <button
            className=" shadow-sky-500 shadow-sm flex space-x-2 rounded-md border border-gray-200 p-2 text-slate-400 bg-blue-50 self-end hover:bg-sky-500 hover:text-gray-100 lg:mb-12"
            onClick={onAddItem}
          >
            <span>
              <FaMapMarkedAlt className="w-4 h-4" />
            </span>
            <p className="text-xs font-lato">Add Item</p>
          </button>
          <h1 className="lg:text-2xl">Analytics</h1>
          <div className="my-6 grid gap-4 grid-cols-2 md:grid-cols-3">
            <div className=" bg-white rounded-lg col-span-2">
              <h2 className="p-3 text-sm text-gray-400">
                User most search data / week
              </h2>
              <div className=" text-xs text-gray-400 flex justify-between p-2 items-end">
                <div className=" space-y-2">
                  <div className=" w-8 rounded-md h-8 bg-blue-200"></div>
                  <p>Jkt Barat</p>
                </div>
                <div className=" space-y-2">
                  <div className=" w-8 rounded-md h-16 bg-blue-500"></div>
                  <p>Jkt Sltn</p>
                </div>
                <div className=" space-y-2">
                  <div className=" w-8 rounded-md h-32 bg-blue-500"></div>
                  <p>Jkt Utra</p>
                </div>
                <div className=" space-y-2">
                  <div className=" w-8 rounded-md h-10 bg-blue-200"></div>
                  <p>Bekasi</p>
                </div>
                <div className="space-y-2">
                  <div className=" w-8 rounded-md h-10 bg-blue-200"></div>
                  <p>Bogor</p>
                </div>
                <div className=" space-y-2">
                  <div className=" w-8 rounded-md h-8 bg-blue-200"></div>
                  <p>Depok</p>
                </div>
              </div>
            </div>
            <div className="p-2 flex flex-col justify-between bg-white rounded-lg col-span-2 md:col-span-1">
              <h2 className="text-sm w-full text-gray-400">My Transaction</h2>
              <div className="flex space-x-2">
                <RiWalletLine className=" text-[#FFAB00] bg-[#FFB77E]/10 w-8 h-8 rounded-md p-1" />
                <p className="text-xs font-thin text-gray-600">
                  Rp 300,000 <br /> <span className=" not-italic">orders</span>
                </p>
              </div>
              <div className="w-full h-auto">
                <img
                  src={process.env.PUBLIC_URL + "/Chart.png"}
                  alt="chart"
                  className=" w-full p-4 lg:p-0"
                />
              </div>
              <h2 className="text-gray-400 text-left text-xs">
                You have done 57.6% more order, by this week
              </h2>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="my-6 flex justify-between items-center">
            <h1 className="lg:text-2xl">My Downloadable</h1>
            <p className="text-xs text-gray-400">See all</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className=" bg-white rounded-md h-20 items-center p-2 flex justify-between">
              <div className="rounded-full w-8 h-8 bg-gray-100">
                <VscFilePdf className=" w-full h-full p-1 text-red-600" />
              </div>
              <div className="w-2/3 text-sm text-gray-400">
                <p className=" text-black tracking-wider">PDF</p>
                <span className=" text-xs">100 Files. 20 GB</span>
              </div>
              <button>
                <IoIosArrowDropright className=" w-4 h-4 text-gray-700" />
              </button>
            </div>
            <div className=" bg-white rounded-md h-20 items-center p-2 flex justify-between">
              <div className="rounded-full w-8 h-8 bg-gray-100">
                <MdMap className=" w-full h-full p-1 text-green-600" />
              </div>
              <div className="w-2/3 text-sm text-gray-400">
                <p className=" text-black tracking-wider">Spatial</p>
                <span className=" text-xs">3 Files. 1.3 GB</span>
              </div>
              <button>
                <IoIosArrowDropright className=" w-4 h-4 text-gray-700" />
              </button>
            </div>
            <div className="bg-white rounded-md h-20 items-center p-2 flex justify-between">
              <div className="rounded-full w-8 h-8 bg-gray-100">
                <MdMap className=" w-full h-full p-1 text-green-600" />
              </div>
              <div className="w-2/3 text-sm text-gray-400">
                <p className=" text-black tracking-wider">Spatial</p>
                <span className=" text-xs">1 Files. 2.3 GB</span>
              </div>
              <button>
                <IoIosArrowDropright className=" w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h1 className="lg:text-2xl">Recent Transactions</h1>
          <div className="my-4 w-full rounded-md bg-white">
            <TableTransaction columns={column} data={data} />
          </div>
        </div>
      </div>

      <div className="no-scrollbar flex space-y-4 flex-col mx-4 lg:flex-1 lg:mt-8 lg:overflow-y-auto">
        <div className="rounded-md p-2 bg-white w-full">
          <h2 className="font-bold">News</h2>
          <div className="w-full my-3 space-y-2 text-gray-400">
            <div className="flex space-x-3">
              <RiMessage2Line className="w-8 h-8" />
              <p className="text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. !
              </p>
            </div>
            <div className="flex space-x-3">
              <RiMessage2Line className="w-8 h-8" />
              <p className="text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. !
              </p>
            </div>
            <div className="flex space-x-3">
              <RiMessage2Line className="w-8 h-8" />
              <p className="text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. !
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md p-2 bg-white w-full">
          <div className="my-6 flex justify-between items-center">
            <h1 className="font-bold">Top Data</h1>
            <div className="bg-[#F4F7FE] rounded-lg">
              <p className="text-xs text-blue-400 px-3 py-1">See all</p>
            </div>
          </div>
          <TableTransaction columns={tcols} data={tdata} />
        </div>
      </div>
    </div>
  );
}

export default BoardHome;
