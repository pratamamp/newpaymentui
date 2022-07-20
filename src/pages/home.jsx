import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import Earth from "../components/earth3d";
import { PerspectiveCamera } from "three";

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
          <ul className="flex space-x-2 items-center font-lato text-sm text-gray-700">
            <li>
              <button className="py-1">Register</button>
            </li>
            <li>
              <button
                className="rounded-full border-2 px-4 text-gray-200 bg-blue-600 py-1"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center bg-[#222232] h-[calc(100vh_-_3.2rem)] overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src={process.env.PUBLIC_URL + "/Earth.mp4"}
            type="video/mp4"
          />
          Your browser doesnt support the video tag
        </video> */}
        <div className="absolute lg:top-1/3 mx-3 z-30 lg:w-1/3">
          <h1 className="text-5xl text-right text-white font-poppins leading-snug tracking-wider font-bold">
            Indonesian's First Monetizing Geospatial Data
          </h1>
          <div className="w-full flex justify-center mt-10">
            <button className="rounded-full bg-green-700 text-white px-3 py-1 text-lg hover:bg-green-500">
              Monetize Now
            </button>
          </div>
        </div>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Home;
