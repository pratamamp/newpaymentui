import React, { useEffect } from "react";
import { RiAppsFill, RiFileList2Line } from "react-icons/ri";
import { GiCubes } from "react-icons/gi";
import { ImUser } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" hidden w-[18%] bg-white border-r-2 justify-center border-slate-200 lg:block">
      <div className="flex items-center border-b-2 border-gray-100 py-2">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo atrbpn"
          className="h-12 mr-1"
        />
        <span className="text-xs text-left">
          Kementrian Agraris <br /> dan Tata Ruang <br /> Badan Pertanahan
          Nasional
        </span>
      </div>
      <div className="pl-2 py-2 w-full">
        <ul className="w-full flex flex-col space-y-4 text-gray-400 text-sm">
          <li
            className={`flex ${
              location.pathname === "/admin" ? "activeMenu" : ""
            } `}
          >
            <button
              className="flex space-x-5"
              onClick={() => navigate("/admin")}
            >
              <RiAppsFill className="h-6 w-auto" />
              <span>Dashboard</span>
            </button>
          </li>
          <li
            className={`flex ${
              location.pathname === "/admin/myfiles" ? "activeMenu" : ""
            }`}
          >
            <button
              className="flex space-x-5"
              onClick={() => navigate("/admin/myfiles")}
            >
              <RiFileList2Line className="h-6 w-auto" />
              <span>My Files</span>
            </button>
          </li>
          <li className="flex">
            <button className="flex space-x-5">
              <GiCubes className="h-6 w-auto" />
              <span>Catalogue</span>
            </button>
          </li>
          <li className="flex">
            <button className="flex space-x-5">
              <ImUser className="h-6 w-auto" />
              <span>Profile</span>
            </button>
          </li>
          <li
            className={`flex ${
              location.pathname === "/admin/cart" ? "activeMenu" : ""
            }`}
          >
            <button
              className="flex space-x-5"
              onClick={() => navigate("/admin/cart")}
            >
              <AiOutlineShoppingCart className="h-6 w-auto" />
              <span>Order History</span>
            </button>
          </li>
        </ul>
      </div>

      {/* <div className="hidden w-full px-3 font-lato space-y-3 md:block">
        <button className="flex space-x-2 mt-1 items-center">
          <IoHelpBuoySharp className="w-6 h-6" />
          <span className="text-sm text-left">Help and Getting Started</span>
        </button>

        <button className="flex space-x-2 items-center">
          <ImExit className="w-6 h-6" />
          <span className="text-md text-h2color font-semibold">Log Out</span>
        </button>
      </div> */}
    </div>
  );
}

export default Sidebar;
