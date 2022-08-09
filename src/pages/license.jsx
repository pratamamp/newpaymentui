import axios from "axios";
import React, { useState } from "react";
import Certificate from "../components/certificate";

const API_URL = process.env.REACT_APP_API_EXTRACT;

function License() {
  const [licenseSuccess, setLicense] = useState(false);
  const [inputText, setInput] = useState("");

  function submitLicense(e) {
    e.preventDefault();

    inputText &&
      axios
        .post(`${API_URL}/api/license/${e.target[0].value}`)
        .then((response) => {
          setLicense(true);
          console.log("license exist!");
        })
        .catch((err) => {
          console.error("License not found");
          setLicense(false);
        });
  }

  function onInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-800 to-blue-400">
      {licenseSuccess ? (
        <Certificate />
      ) : (
        <>
          <img
            className="absolute inset-0 w-full h-full object-cover object-top"
            src={process.env.PUBLIC_URL + "/bg-map.jpg"}
            alt="map"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-10 backdrop-blur-sm"
          />
          <div className="relative container m-auto px-6 md:px-12 lg:px-6">
            <div className="mb-12 flex flex-col items-center h-screen pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
              <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
                Don't let anyone recognize the assets you've bought.
              </h1>

              <form className="w-9/12" onSubmit={submitLicense}>
                <div className="relative">
                  <input
                    type="search"
                    id="search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="License Code"
                    required
                    onChange={onInputChange}
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Check
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default License;
