import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./layouts/topbar";
import { PersilProvider } from "./hooks/persil";
import { CartProvider } from "./hooks/cart";
import Sidebar from "./layouts/sidebar-v2";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex w-full h-screen font-publicsans">
      {/* sidebar */}
      {location.pathname !== "/admin/cart" ? <Sidebar /> : ""}
      {/* content */}
      <div className="flex-1">
        <div className=" h-[calc(100vh_-_3.5rem)]">
          <PersilProvider>
            <CartProvider>
              <Topbar />
              <Outlet />
            </CartProvider>
          </PersilProvider>
        </div>
        <h2
          className={`fixed bottom-0 h-10 bg-white text-xs text-gray-400 items-center flex justify-center tracking-wider w-full }`}
        >
          Copyright © 2022 | Powered by Esri Indonesia
        </h2>
      </div>
    </div>
  );
}

export default Layout;
