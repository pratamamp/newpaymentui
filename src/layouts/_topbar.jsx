import React from "react";
import logo from "../assets/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineAlignRight, AiOutlinePlusCircle } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  let navigate = useNavigate();

  return (
    <div className="flex items-center h-24 sticky top-0">
      <div className="flex justify-between w-full lg:justify-end">
        <div className="w-1/6 px-2 max-h-16 lg:w-1/6">
          <img
            src={logo}
            alt="logo atrbpn"
            className="max-h-full h-auto align-middle border-none"
          />
        </div>
        <div className="hidden bg-white w-4/6 flex items-center lg:block">
          <div className="mr-6">
            <form action="">
              <div className="relative mt-1 lg:w-80">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <RiSearch2Line className="text-[#9CA1B6] w-6 h-6" />
                </div>
                <input
                  type="text"
                  name="search"
                  className="border bg-basecolor text-basecolor sm:text-sm rounded-md focus:outline-none focus:ring-1 block w-full pl-10 p-2.5"
                  placeholder="search or type a command..."
                />
              </div>
            </form>
          </div>
        </div>

        <div className="hidden space-x-1 items-center justify-end lg:block lg:flex lg:w-1/6 lg:mx-3">
          <button className="" onClick={async (e) => navigate("/admin/map")}>
            <AiOutlinePlusCircle className=" w-10 h-10 text-[#0075FF]" />
          </button>

          <HiUserCircle className="w-10 h-10 text-basecolor" />
        </div>

        <div className="flex px-2 items-center justify-center lg:hidden">
          <AiOutlineAlignRight className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
