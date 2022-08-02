import React from "react";
import Lottie from "react-lottie";
import { SiGentoo } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import MidtransLogo from "../assets/logomidtrans";
import { TiThMenu } from "react-icons/ti";

function Home() {
  const navigate = useNavigate();

  const lottieConfig = {
    loop: true,
    autoplay: true,
    renderer: "svg",
    animationData: require("../assets/earth.json"),
    mode: "scroll",
  };
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900 to-purple-900 fixed inset-x-0 z-50 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-white">
                  <SiGentoo className="w-10 h-10" />
                  <span className="mx-3 text-xl font-bold">PayLand</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li className="text-gray-300 md:px-4 transition hover:text-sky-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-gray-300 md:px-4 transition hover:text-sky-300">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="text-gray-300 md:px-4 transition hover:text-sky-300">
                    <Link to="/license">License</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3 text-gray-300">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-blue-400 text-white hover:bg-yellow-300 text-sm hover:text-yellow-800 rounded-full transition duration-300"
              >
                Signup
              </a>
            </div>
            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button focus:outline-none">
                <TiThMenu className="w-10 h-auto text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
        </div>
      </nav>
      {/* content goes here */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 h-screen p-3 overflow-y-auto no-scrollbar">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:pt-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                  <div className="relative">
                    <Lottie
                      options={lottieConfig}
                      isClickToPauseDisabled
                      style={{ cursor: "default" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Staking Land
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-100 md:text-7xl lg:text-5xl">
                Monetize your information in the new way
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-200">
                Just as physical land owners can profit from the information on
                their land, as a buyer can get a license for the land
                information.
              </p>
              <div className=" w-full">
                <button
                  className=" rounded-xl bg-yellow-400 p-2 text-blue-800 px-3 font-publicsans transition duration-500 ease-in-out transform hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Start Monetize
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
