import React from "react";
import { HiGlobe, HiOutlineCog } from "react-icons/hi";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { BsUiChecksGrid } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IoHelpBuoySharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const Sidebar = () => {
  let navigate = useNavigate();

  return (
    <div className="hidden bg-white lg:1/6 lg:block lg:w-1/6">
      <div className="relative mx-4 font-lato divide-y-2 font-semibold text-h2color h-[calc(100vh_-_15rem)]">
        <ul className="space-y-2 h-[calc(100vh_-_12rem)]">
          <li>
            <button
              className="w-full flex items-center rounded-md bg-activebg"
              onClick={() => navigate("/admin")}
            >
              <BsUiChecksGrid className="w-6 h-6 text-activefont m-2" />
              <span className="mx-4 font-lato font-semibold">Home</span>
            </button>
          </li>
          <li className="flex items-center rounded-md hover:bg-activebg">
            <HiGlobe className="w-6 h-6 m-2" />
            <span className="mx-4">Products</span>
          </li>
          <li className="flex items-center rounded-md hover:bg-activebg">
            <RiShoppingBasket2Fill className="w-6 h-6 m-2" />
            <span className="mx-4">Markets</span>
          </li>
          <li className="flex items-center rounded-md hover:bg-activebg">
            <HiOutlineCog className="w-6 h-6 m-2" />
            <span className="mx-4">Settings</span>
          </li>
        </ul>

        <div className="hidden w-full px-3 font-lato space-y-3 md:block">
          <button className="flex space-x-2 mt-1 items-center">
            <IoHelpBuoySharp className="w-6 h-6" />
            <span className="text-sm text-left">Help and Getting Started</span>
          </button>

          <button className="flex space-x-2 items-center">
            <ImExit className="w-6 h-6" />
            <span className="text-md text-h2color font-semibold">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
