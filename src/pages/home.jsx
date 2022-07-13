import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
      {/* TopBar */}
      <div className="flex justify-between items-center border-b-2 mx-2 border-gray-100">
        <div className="flex items-center">
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

        <div className="hidden md:block">
          <ul className="flex space-x-5 font-semibold font-publicsans text-gray-700">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button onClick={() => navigate("/license")}>License</button>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-2 font-publicsans text-gray-100">
            <li>
              <button className="py-1" onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
            <li>
              <button className="rounded-full bg-gradient-to-r from-black to-blue-600 px-3 py-1">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#152151]">
        <div className="relative overflow-hidden">
          <img
            src={process.env.PUBLIC_URL + "/indonesiamap.png"}
            alt="indonesiamap"
            className="top-1/2 right-1/3 lg:translate-x-1/3"
          />
          <div className="w-full h-40 absolute top-1/4 lg:w-1/2 lg:mx-12">
            <h1 className="text-white text-2xl text-center font-poppins lg:text-5xl lg:text-left">
              The First Indonesian's Data Providers for land information
            </h1>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium iusto aliquid aperiam quo provident, voluptate tempore
              aspernatur repudiandae beatae facere. Quis laboriosam enim
              ratione, corrupti eos at numquam aperiam dolore.
            </p>
            <div className="flex my-5 space-x-4">
              <button className="rounded-full w-36 bg-white px-2 py-3 tracking-wider font-lato hover:bg-sky-100">
                Buy Land
              </button>
              <button className="rounded-full w-36 px-2 border-2 text-white">
                How to buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
