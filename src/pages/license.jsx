import React from "react";
import Ornamen from "../components/ornamen";

function License() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-blue-900">
      <div className="w-11/12 h-[calc(100vh_-_5rem)] max-w-3xl bg-gradient-to-br from-white to-gray-300 rounded-xl relative overflow-clip">
        <Ornamen className="w-1/2 h-full absolute right-0 -top-8" />
        <div className="w-1/2 mx-8 mt-4 border-b-[2px] border-slate-400">
          <h1 className=" text-4xl tracking-wide">CERTIFICATE</h1>
          <p className="text-[#cd526a] font-bold text-lg tracking-widest">
            OF APPRECIATION
          </p>
        </div>
        <h2 className="mx-8 my-4 text-3xl font-extrabold font-publicsans tracking-widest">
          LAND BUYING
        </h2>

        <div className="mt-12 bg-gradient-to-r from-[#0777bd] to-[#fefefe] via-[#6dbfe2] w-3/5 -mx-10 rounded-3xl">
          <h2 className="text-white px-[4.5rem] font-lato font-bold tracking-wider uppercase py-1 text-sm">
            Proudly present to
          </h2>
        </div>

        <h1 className="text-7xl font-windsong m-8 font-semibold text-[#df4aad]">
          Esri dev
        </h1>
        <h2>NIB 88394849</h2>
      </div>
    </div>
  );
}

export default License;
