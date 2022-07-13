import React, { useMemo } from "react";
import { MdOutlinePictureAsPdf, MdMap } from "react-icons/md";
import PrevMap from "../assets/prevproducts";
import HelloTable from "../components/reacttable";
import { dummycolumns, dummydata } from "../assets/tabledata";

function Admin() {
  const data = useMemo(() => dummydata);
  const columns = useMemo(() => dummycolumns);
  return (
    <div className="p-3 flex-1">
      {/* right left content */}
      <div className="w-full space-y-2 lg:space-x-2 lg:flex lg:space-y-0">
        {/* left */}
        <div className="h-[calc(100vh_-_7rem)] space-y-3 overflow-y-auto no-scrollbar lg:w-2/3">
          <div className="w-full p-3 bg-white rounded-md space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-lato font-bold text-2xl">Overview</h1>
              <div className="w-20 h-10 bg-basecolor rounded-md"></div>
            </div>

            <div className=" bg-basecolor rounded-md font-lato p-2 grid gap-4 grid-cols-2 md:gap-1 md:grid-cols-3">
              <div className=" bg-white rounded-md px-3 text-gray-500 flex flex-col">
                <div className="self-end bg-[#e9eef3] m-2 rounded-md px-3">
                  <span className=" text-bgthumbgreen text-sm">8 %</span>
                </div>
                <div className="items-center lg:mx-2">
                  <h2 className="text-sm">Transactions</h2>
                  <div className="flex items-center space-x-3">
                    <p className="font-bold text-2xl lg:text-4xl">153</p>
                    <span>orders</span>
                  </div>
                </div>
              </div>

              <div className="rounded-md text-gray-100 bg-white border-2 items-center border-purple-200 flex flex-col justify-between p-3 lg:flex-row">
                <h1 className="text-sm text-h2color">Downloaded Files</h1>
                <div className="flex space-x-1">
                  <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="rounded-md bg-basecolor">
                      <MdOutlinePictureAsPdf className="text-red-600 w-6 h-6 m-2" />
                    </div>
                    <p className="text-3xl font-bold text-h2color">34</p>
                  </div>
                  <div className=" flex flex-col justify-center items-center space-y-1">
                    <div className=" rounded-md bg-bgthumbgreen">
                      <MdMap className="w-6 h-6 text-white m-2" />
                    </div>
                    <p className="text-3xl font-bold text-h2color">14</p>
                  </div>
                </div>
              </div>

              <div className=" text-slate-400 rounded-md col-span-2 py-1 flex flex-col md:col-span-1">
                <div className="self-end bg-white mx-2 rounded-md px-3">
                  <span className=" text-bgthumbgreen text-sm">23 %</span>
                </div>
                <h2 className="text-sm">Total Amount</h2>
                <p className="mt-1 text-2xl font-bold">Rp 134.345,00</p>
              </div>
            </div>
            <div className="h-36 font-lato text-h1color font-semibold text-sm flex flex-col justify-center items-center mx-3 md:flex-row">
              <h2 className="font-lato text-sm text-center m-3 w-1/3 text-h2color md:m-0 md:text-left">
                Last Products
              </h2>
              <div className="w-full flex justify-between md:w-2/3">
                <div className="">
                  <div className="rounded-full w-12 h-12 h-full bg-sky-100" />
                  <h2 className=" text-center">Item 1</h2>
                </div>
                <div className="">
                  <div className="rounded-full w-12 h-12 h-full bg-sky-100" />
                  <h2 className=" text-center">Item 2</h2>
                </div>
                <div className="">
                  <div className="rounded-full w-12 h-12 h-full bg-sky-100" />
                  <h2 className=" text-center">Item 3</h2>
                </div>
                <div className="">
                  <div className="rounded-full w-12 h-12 h-full bg-sky-100" />
                  <h2 className=" text-center">Item 4</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-white h-96 w-full">
            <div className="p-3 flex justify-between">
              <h1 className="font-lato font-bold text-2xl">History</h1>
              <div className="w-20 h-10 bg-basecolor rounded-md"></div>
            </div>

            {/* this is table component */}

            <HelloTable />
          </div>
        </div>
        {/* right */}

        <div className="h-[calc(100vh_-_7rem)] overflow-y-auto no-scrollbar space-y-3 lg:w-1/3">
          <div className="bg-white rounded-md p-3 flex flex-col justify-center">
            <h1 className="font-lato font-bold text-2xl">Popular Item</h1>

            <div className=" divide-y-2">
              <div className="w-full flex p-2 justify-between font-lato">
                <PrevMap className="w-48 h-auto" />
                <div className=" text-h1color text-sm">
                  Jakarta Selatan UMK scatter Lorem ipsum dolor sit amet
                  <br />
                  <span className=" text-xs text-green-600 font-semibold">
                    pdf, shp
                  </span>
                </div>
                <h2>4578</h2>
              </div>

              <div className="w-full flex p-2 justify-between font-lato">
                <PrevMap className="w-48 h-auto" />
                <div className=" text-h1color text-sm">
                  Jakarta Selatan UMK scatter Lorem ipsum dolor sit amet
                  <br />
                  <span className=" text-xs text-green-600 font-semibold">
                    pdf, shp
                  </span>
                </div>
                <h2>4578</h2>
              </div>

              <div className="w-full flex p-2 justify-between font-lato">
                <PrevMap className="w-48 h-auto" />
                <div className=" text-h1color text-sm">
                  Jakarta Selatan UMK scatter Lorem ipsum dolor sit amet
                  <br />
                  <span className=" text-xs text-green-600 font-semibold">
                    pdf, shp
                  </span>
                </div>
                <h2>4578</h2>
              </div>

              <div className="w-full flex p-2 justify-between font-lato">
                <PrevMap className="w-48 h-auto" />
                <div className=" text-h1color text-sm">
                  Jakarta Selatan UMK scatter Lorem ipsum dolor sit amet
                  <br />
                  <span className=" text-xs text-green-600 font-semibold">
                    pdf, shp
                  </span>
                </div>
                <h2>4578</h2>
              </div>
            </div>

            <button className="w-full rounded-md border-2 text-lato font-bold text-h2color p-2 hover:bg-sky-100">
              All Products
            </button>
          </div>
          <div className="bg-white rounded-md h-32"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
