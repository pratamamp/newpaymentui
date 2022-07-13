import React, { useEffect, useRef, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function CreateMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    new MapView({
      map: new Map({
        basemap: "dark-gray-vector",
      }),
      extent: {
        xmin: 106.779,
        xmax: 106.838,
        ymin: -6.1875896975,
        ymax: -6.1564480124,
        spatialReference: 4326,
      },
      constraints: {
        minZoom: 6,
        maxZoom: 25,
      },
      container: mapRef.current,
      ui: {
        padding: {
          top: 30,
        },
        components: ["attribution"],
      },
    }).when((view) => {});
  }, []);
  return (
    <div className="flex-1 relative">
      <div className="w-full h-full" ref={mapRef} />
      <div className="bg-gradient-to-b from-white w-full h-4 absolute top-0"></div>
    </div>
  );
}

export default CreateMap;
