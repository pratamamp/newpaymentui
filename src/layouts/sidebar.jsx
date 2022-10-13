import React, { useEffect } from "react";
import { RiAppsFill, RiFileList2Line } from "react-icons/ri";
import { GiCubes } from "react-icons/gi";
import { ImUser } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { useAuth } from "../hooks/auth";
import { SiGentoo } from "react-icons/si";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  return (
    <div className=" hidden w-[18%] bg-white border-r-2 justify-center  border-gray-100/75 lg:block">
      <div className="flex items-center p-2">
        {/* <div>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo atrbpn"
            className=" w-10 h-10"
          />
        </div>
        <span className="text-gray-800 text-left text-sm ml-2">
          Kementerian Agraria dan Tata Ruang
          <br />
          <span>Badan Pertanahan Nasional</span>
        </span> */}
        <div aria-hidden="true" className="flex space-x-1">
          <SiGentoo className="w-6 h-6 text-orange-400" />
        </div>
        <span className="text-xl ml-2 font-bold text-orange-300 font-lato">
          PayLand
        </span>
      </div>
      <div className="pl-2 py-2 w-full h-[calc(100vh_-_5.5rem)]">
        <ul className="w-full flex flex-col space-y-4 text-gray-400 text-sm font-poppins">
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
      <div className="w-full pl-2 py-2">
        <button
          className="flex space-x-5 items-center text-gray-400 text-sm"
          onClick={() => auth.signOut()}
        >
          <BiExit className="h-6 w-auto" />
          <span className="font-bold tracking-wider">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
