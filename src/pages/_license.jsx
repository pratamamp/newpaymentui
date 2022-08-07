import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbLicense } from "react-icons/tb";
import Lottie from "react-lottie";
import Certificate from "../components/cerfiticate";

const API_URL = process.env.REACT_APP_API_EXTRACT;

function License() {
  const [checkLicense, setCheck] = useState("");
  const [validLicense, setValidLicense] = useState(false);

  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../assets/congrats2.json"),
  };

  function handleChange(event) {
    setCheck(event.target.value);
  }

  function submitLicense(event) {
    event.preventDefault();

    axios
      .post(`${API_URL}/api/license/${checkLicense}`)
      .then((response) => {
        setValidLicense(true);
      })
      .catch((err) => {
        console.error("license not found");
        setValidLicense(false);
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-magenta-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-gradient-to-br from-slate-800 to-purple-900 rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-3 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-100 leading-6 lg:text-4xl">
                      License Check
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="license" className="sr-only"></label>
                  <input
                    id="license"
                    type="text"
                    name="license"
                    autoComplete="off"
                    onChange={handleChange}
                    value={checkLicense}
                    className="block w-full px-1 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Input your License Code"
                  />
                </div>

                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="button"
                    onClick={submitLicense}
                    className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>

            {validLicense && (
              <div className="absolute top-1/2 left-[15%]">
                <Lottie options={lottieConfig} height={200} />
              </div>
            )}

            <div className="w-full h-96 order-first lg:block">
              {validLicense ? (
                <Certificate className="h-full" />
              ) : (
                <img
                  className="h-full bg-cover rounded-l-lg object-cover"
                  src="https://images.unsplash.com/photo-1532154187607-d766ed024aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default License;
