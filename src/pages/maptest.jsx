import React, { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

function MapTest() {
  const mapRef = useRef(null);

  const [isView, setView] = useState(false);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({ basemap: "topo-vector" });

      new MapView({
        map,
        center: [-118.805, 34.027],
        zoom: 13,
        container: mapRef.current,
      }).when((view) => {
        setView(view);
      });
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div className="space-y-2 text-white pt-16 lg:pl-56 w-full h-[calc(100vh_-_0.1rem)]">
        <div className="w-full h-full" ref={mapRef}></div>
        <div className="w-full h-96 bg-slate-900"></div>
        <div className="w-full h-96 bg-sky-200"></div>
      </div>
    </div>
  );
}

export default MapTest;
