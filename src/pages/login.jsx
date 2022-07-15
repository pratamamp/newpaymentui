import React, { useState } from "react";
import InstagramIcon from "../components/instagramicon";
import TwitterIcon from "../components/twittericon";
import FacebookIcon from "../components/facebookicon";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  const [rememberCheck, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let pass = formData.get("password");

    const loginUser = { email, pass };

    auth.signIn(loginUser);
  };

  return (
    <section className="min-h-screen flex items-stretch text-white font-poppins">
      <div className="w-full flex text-center bg-[#222232] px-2 z-0 lg:w-1/2">
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage: "url(/imagelogin.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-2 z-20 h-screen ">
          <div className="flex justify-between">
            <div className="h-8 flex space-x-2 items-center my-2">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="logo atrbpn"
                className=" h-8"
              />
              <span className="text-xs w-44 text-left">
                Kementrian Agraris dan Tata Ruang <br /> Badan Pertanahan
                Nasional
              </span>
            </div>
            <h2 className="text-xs flex">
              <span className="hidden sm:block">Don`t have account?</span>
              <span className=" ml-1">
                <button className=" text-green-300 font-bold">Sign up!</button>
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center px-2 h-[calc(100vh_-_6rem)] sm:px-32 lg:px-8">
            <h1 className=" text-3xl text-left font-bold">Welcome</h1>
            <h2 className=" text-left">
              Please login to start using application
            </h2>
            <div className="flex space-x-3 w-full justify-center my-6">
              <button className=" rounded-md bg-white p-2 flex space-x-1 w-32 items-center">
                <FcGoogle className="w-8 h-8 p-1" />
                <span className="font-semibold text-slate-600">Google</span>
              </button>
              <button className=" rounded-md bg-white p-2 flex space-x-1 w-32 items-center">
                <BsFacebook className=" p-1 text-blue-600 w-8 h-8" />
                <span className="text-slate-600 font-semibold">Facebook</span>
              </button>
            </div>

            <div className=" flex justify-between space-x-2 items-center">
              <div className=" h-0.5 w-1/3 bg-gray-300" />
              <h2 className=" text-xs">or continue with</h2>
              <div className=" h-0.5 w-1/3 bg-gray-300" />
            </div>

            <form
              className="justify-between flex flex-col items-center space-y-2"
              onSubmit={handleLogin}
            >
              <div className="w-full">
                <label htmlFor="email">
                  <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-indigo-500 bg-white border rounded-md focus:border-gray-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email"
                    name="email"
                    autoComplete="emailuser"
                  ></input>
                </label>
              </div>
              <div className="w-full">
                <div>
                  <label htmlFor="password">
                    <input
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      className="block w-full px-4 py-2 mt-2 text-indigo-500 bg-white border rounded-md focus:border-gray-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Password"
                    ></input>
                  </label>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <label
                  htmlFor="default-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="sr-only peer"
                    defaultChecked={rememberCheck}
                    onChange={() => setRemember(!rememberCheck)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className=" hidden ml-3 text-xs font-medium text-gray-200 dark:text-gray-300 sm:block">
                    Remember me
                  </span>
                </label>

                <button className="text-xs self-center" type="button">
                  Recover Password
                </button>
              </div>

              <button
                className="mt-6 border-2 border-gray-700 rounded-md w-full py-2 hover:bg-slate-600"
                type="submit"
              >
                Log in
              </button>
            </form>
          </div>
          <h2 className="text-xs">
            Copyright © 2022 Kementrian Agraris dan Tata Ruang Badan Pertanahan
            Nasional | Powered By Esri Indonesia
          </h2>
        </div>
      </div>

      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage: "url(/imagelogin.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-40 inset-0 z-0" />
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Monetize your land info in unique way.
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <span>
            <TwitterIcon className="w-8 h-8" />
          </span>
          <span>
            <FacebookIcon className="w-8 h-8" />
          </span>
          <span>
            <InstagramIcon className="w-8 h-8" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Login;
