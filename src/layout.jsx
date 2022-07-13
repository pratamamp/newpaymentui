import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./layouts/sidebar";
import Topbar from "./layouts/topbar";

function Layout() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <div className="bg-basecolor h-[calc(100vh_-_6rem)] overflow-y-auto lg:flex">
        {/* Sidebar */}
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
