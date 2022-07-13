import React from "react";
import { FaCartPlus, FaTrashAlt, FaSearch } from "react-icons/fa";
import { usePersilSelect } from "../hooks/persil";
import { useContext } from "../hooks/cart";
import SelectedItem from "../components/admin/selecteditem";

function MapViewerSidebar() {
  const { list } = usePersilSelect();

  return (
    <div className="m-4 px-3 pb-2 pt-4 flex-1 bg-[#4C8076]/30 opacity-90 overflow-y-auto no-scrollbar rounded-lg lg:absolute lg:top-12 lg:right-0 lg:w-1/4 lg:h-[calc(100vh_-_8rem)] lg:m-4">
      <form method="GET">
        <div className="relative text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1">
              <FaSearch />
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
            placeholder="Find address or location"
            autoComplete="off"
          />
        </div>
      </form>
      {list.length > 0 && (
        <div className="mt-2 flex justify-between">
          <h3 className="text-slate-900 text-xs">
            {list.length} record(s) founded
          </h3>
          <div className="flex space-x-2">
            <button className="text-xs w-16 bg-white rounded-full hover:bg-gray-300">
              add
            </button>
            <button className="text-xs w-16 bg-gray-600 text-white rounded-full hover:bg-gray-500">
              clear
            </button>
          </div>
        </div>
      )}

      <div className="grow overflow-y-auto no-scrollbar py-3">
        <div id="feature-info">
          <ul className="space-y-3">
            {list.map((item, index) => (
              <SelectedItem key={item.objectid} product={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapViewerSidebar;
