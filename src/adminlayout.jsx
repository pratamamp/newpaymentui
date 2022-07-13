import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "./layouts/topbar";
import Sidebar from "./layouts/sidebar";
import { PersilProvider } from "./hooks/persil";
import { CartProvider } from "./hooks/cart";

function AdminLayout() {
  const location = useLocation();
  return (
    <div className="flex w-full h-screen font-publicsans">
      {location.pathname !== "/admin/success" && <Sidebar />}
      <div className="flex-1">
        <div className="h-[calc(100vh_-_3.5rem)]">
          <PersilProvider>
            <CartProvider>
              <Topbar />
              <Outlet />
            </CartProvider>
          </PersilProvider>
        </div>
        <h2 className="fixed bottom-0 h-10 bg-white text-xs font-lato text-stone-300 items-center flex justify-center tracking-wider w-full lg:w-[82%]">
          Copyright © 2022 | Powered by Esri Indonesia
        </h2>
      </div>
    </div>
  );
}

export default AdminLayout;
