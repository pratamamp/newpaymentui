import React from "react";
import { TbLicense } from "react-icons/tb";

function License() {
  return (
    <div
      className="relative py-16
          before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
    >
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-full">
          <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
            <div className="lg:grid lg:grid-cols-2">
              <TbLicense className=" h-48 w-48" />

              <div className="p-6 sm:p-16">
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Input your License
                </h2>
                <form action="" className="space-y-8">
                  <div className="space-y-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
  focus:ring-2 focus:ring-sky-300 focus:outline-none
  invalid:ring-2 invalid:ring-red-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-md bg-sky-600
                                  focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default License;
