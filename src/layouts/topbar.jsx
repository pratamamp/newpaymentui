import React from "react";
import { RiGridFill } from "react-icons/ri";
import { AiFillBell } from "react-icons/ai";
import { BsFillCartFill, BsCartX } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { useCart } from "../hooks/cart";
import { useNavigate, useLocation } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartList } = useCart();

  return (
    <div className="h-12 bg-white flex items-center justify-between w-full">
      <div className="w-4/6 flex items-center justify-between">
        {location.pathname === "/admin" && (
          <div className="mr-6">
            <form action="">
              <div className="relative mt-1 lg:w-80">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BiSearchAlt className="text-[#9CA1B6] w-6 h-6" />
                </div>
                <input
                  type="text"
                  name="search"
                  className="bg-white text-basecolor sm:text-sm rounded-md focus:outline-none focus:ring-1 block w-full pl-10 p-2.5"
                  placeholder="Search (Ctrl+/)"
                />
              </div>
            </form>
          </div>
        )}
        {location.pathname === "/admin/success" && (
          <div className="flex items-center py-2">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logoatrbpn"
              className="h-12 mr-1"
            />
            <span className="text-xs text-left">
              Kementrian Agraris <br /> dan Tata Ruang <br /> Badan Pertanahan
              Nasional
            </span>
          </div>
        )}
      </div>

      <div className="flex space-x-2 items-center text-gray-400 mx-2">
        {cartList && cartList.length <= 0 ? (
          <BsCartX className="w-5 h-5" />
        ) : (
          <button className="relative" onClick={() => navigate("/admin/cart")}>
            <BsFillCartFill className="w-5 h-5 hover:text-gray-600" />
            <div className="absolute rounded-full bg-red-500 w-4 h-4 opacity-90 -top-1 -left-1 flex items-center justify-center text-xs text-white">
              {cartList.length}
            </div>
          </button>
        )}
        <RiGridFill className="w-5 h-5" />
        <AiFillBell className="w-5 h-5" />
        <button>
          <HiUserCircle className="w-6 h-6 text-blue-400" />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
