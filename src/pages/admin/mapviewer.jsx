import React, { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import MapViewerSidebar from "../../layouts/mapviewersidebar";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Handles from "@arcgis/core/core/Handles";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import * as query from "@arcgis/core/rest/query";
import Query from "@arcgis/core/rest/support/Query";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import { usePersilSelect } from "../../hooks/persil";

function MapViewer() {
  const mapRef = useRef(null);
  const [currentView, setView] = useState(false);
  const { list, updateList } = usePersilSelect();
  const URLPersil =
    "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/persil_dummy_monetisasi/FeatureServer";

  const renderPoly = {
    type: "simple",
    symbol: {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: [60, 160, 105],
      outline: {
        color: "lightgray",
        width: 0.5,
      },
    },
  };
  const featurePersil = new FeatureLayer({
    url: URLPersil,
    outFields: ["*"],
    popupTemplate: createPopupTemplate(),
    renderer: renderPoly,
    opacity: 0.7,
  });

  const handles = new Handles();
  const polygonGraphicsLayer = new GraphicsLayer();
  const selected = new GraphicsLayer();

  function addWidget(view) {
    const sketchViewModel = new SketchViewModel({
      view: view,
      layer: polygonGraphicsLayer,
      pointSymbol: {
        type: "simple-marker",
        color: [255, 255, 255, 0],
        size: "1px",
        outline: {
          color: "gray",
          width: 0,
        },
      },
    });
    sketchViewModel.on("create", (event) => {
      if (event.state === "complete") {
        polygonGraphicsLayer.remove(event.graphic);
        selectedFeatures(event.graphic.geometry);
      }
    });

    const selectPolygon = document.createElement("button");
    selectPolygon.classList =
      "border-white border-2 bg-activefont text-white rounded-md items-center flex justify-center p-3 text-xs hover:bg-sky-600";
    selectPolygon.textContent = "Draw area";
    selectPolygon.addEventListener("click", (event) => {
      clearUpSelection();
      sketchViewModel.create("polygon");
    });

    function clearUpSelection() {
      selected.removeAll();
    }

    return selectPolygon;
  }

  function createPopupTemplate() {
    return {
      title: "NIB : {nib}",
      content: showField,
      fieldInfos: [
        {
          fieldName: "pemeganghak",
          label: "Pemegang Hak",
        },
        {
          fieldName: "nomorhak",
          label: "Nomor Hak",
        },
        {
          fieldName: "kelurahan",
          label: "Kelurahan",
        },
        {
          fieldName: "nilaitanah",
          label: "Nilai Tanah",
        },
      ],
    };
  }

  function selectedFeatures(geometry) {
    selected.removeAll();
    let queryUrl =
      "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/persil_dummy_monetisasi/FeatureServer/1";
    let queryObject = new Query();
    queryObject.returnGeometry = true;
    queryObject.outFields = ["*"];
    queryObject.geometry = geometry;

    query.executeQueryJSON(queryUrl, queryObject).then(function (results) {
      const graphics = results.features.map((r) => {
        r.symbol = {
          type: "simple-fill",
          color: "lightblue",
          outline: {
            color: "#333",
            width: 2.5,
          },
        };

        return r;
      });
      selected.addMany(graphics);
      const persilItem = graphics.map(getItemPersil);
      updateList(persilItem);
    });
  }

  function getItemPersil(item) {
    return {
      objectid: item.attributes.objectid,
      kota: item.attributes.kota,
      nib: item.attributes.nib,
      kelurahan: item.attributes.kelurahan,
      kecamatan: item.attributes.kecamatan,
      jenishak: item.attributes.jenishak,
      luas: item.attributes.luastertulis,
      perorangan: item.attributes.perorangan,
      kdb: item.attributes.kdb,
      diizinkan: item.attributes.luasdiizinkan,
      nilai: item.attributes.nilaitanah,
      nilaijualbeli: item.attributes.nilaijualbeli,
    };
  }

  function createPopupTemplate() {
    return {
      title: "NIB : {nib}",
      content: showField,
      fieldInfos: [
        {
          fieldName: "pemeganghak",
          label: "Pemegang Hak",
        },
        {
          fieldName: "nomorhak",
          label: "Nomor Hak",
        },
        {
          fieldName: "kelurahan",
          label: "Kelurahan",
        },
        {
          fieldName: "nilaitanah",
          label: "Nilai Tanah",
        },
      ],
    };
  }

  function showField(feature) {
    const div = document.createElement("div");
    div.classList = "flex flex-col bg-gray-100 p-3 rounded";
    div.innerHTML = `<p>Nama Pemegang Hak: ${feature.graphic.attributes.pemeganghak} </p><br><p>Nomor Hak: ${feature.graphic.attributes.nomorhak}</p><br>
    <p>Kelurahan ${feature.graphic.attributes.kelurahan} , Kecamatan ${feature.graphic.attributes.kecamatan}</p>
    <button class="bg-blue-500 rounded p-2 flex items-center justify-center w-20 self-end h-auto text-white mt-5" id="btnaddcart">Buy</button>`;

    const btn = div.querySelector("#btnaddcart");
    return div;
  }

  function onSelectMap(view) {
    view.when().then(() => {
      view.on("click", (screenPoint) => {
        handles.removeAll();

        const point = view.toMap(screenPoint);
        selectedFeatures(point);
      });
    });
  }

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: "topo-vector",
        layers: [featurePersil, selected, polygonGraphicsLayer],
      });

      new MapView({
        map,
        container: mapRef.current,
        ui: {
          components: ["attribution"],
        },
        extent: {
          xmin: 106.8026,
          xmax: 106.8322,
          ymin: -6.18758969754849,
          ymax: -6.156448012451398,
          spatialReference: 4326,
        },
        constraints: {
          minZoom: 15,
          maxZoom: 20,
        },
        popup: {
          autoOpenEnabled: false,
        },
      }).when((view) => {
        setView(view);
        const selectWidget = addWidget(view);
        onSelectMap(view);
        view.ui.add(selectWidget, "top-left");
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col h-[calc(100vh_-_5.5rem)] bg-gray-200">
      <div className="w-full h-1/2 p-2 bg-gray-100 lg:h-full lg:p-0">
        <div className="w-full h-full" ref={mapRef}></div>
      </div>
      <MapViewerSidebar />
    </div>
  );
}

export default MapViewer;
