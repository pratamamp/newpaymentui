import React, { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function HomeMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: "topo-vector",
      });
      new MapView({
        map,
        center: [-118.805, 34.027],
        zoom: 13,
        container: mapRef.current,
      });
    }
  }, []);
  return (
    <div className="w-full h-96 lg:h-[calc(100vh_-_10rem)]" ref={mapRef}></div>
  );
}

export default HomeMap;
