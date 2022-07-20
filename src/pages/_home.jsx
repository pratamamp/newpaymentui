import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import Earth from "../components/earth3d";
import { PerspectiveCamera } from "three";
import {SiGentoo} from 'react-icons/si'

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <cameraHelper args={[camera]} />;
}
function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
      {/* TopBar */}
      <div className="flex justify-between items-center border-b border-slate-600 bg-[#13132b]">
        <div className="flex items-center">
          
        <SiGentoo className="w-10 h-10 text-sky-100 m-2" />
          <span className="text-xs font-lato text-left text-sky-50">
            PAYLAND
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-5 font-semibold font-lato font-thin text-gray-300">
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
          <ul className="flex space-x-2 items-center font-lato text-sm text-gray-300">
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
      <div className="relative from-[#13132b] to-blue-900 bg-gradient-to-br h-[calc(100vh_-_3.2rem)] overflow-y-auto space-y-2">
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
        {/* <div className="absolute lg:top-1/3 mx-3 z-30 lg:w-1/3">
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
        </Canvas> */}

        <div className="h-96 w-1 bg-white"></div>
        <div className="h-96 w-1 bg-white"></div>
        <div className="h-96 w-1 bg-white"></div>
        <div className="h-96 w-1 bg-white"></div>
        <div className="h-96 w-1 bg-white"></div>
      </div>
    </div>
  );
}

export default Home;