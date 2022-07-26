import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { getRandomId } from "../../helper/randomId";

const API_URL = process.env.REACT_APP_API_GATEWAY;

function Success() {
  const navigation = useNavigate();
  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../../assets/paymentsuccess.json"),
  };

  useEffect(() => {
    let objIds = JSON.parse(localStorage.getItem("cart"));
    if (objIds.length > 0) {
      let arrObjId = objIds.map((row, i) => {
        return row.nib;
      });

      const userInfo = jwtDecode(localStorage.getItem("authInfo")).data;

      document.getElementById("btntofiles").disabled = true;
      let paramAPIExtract = {
        spatial: {
          nib: arrObjId,
          restserviceurl:
            "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/persil_dummy_monetisasi/FeatureServer/1/query",
          attribute: ["*"],
        },
        transaction: {
          order_id: getRandomId(10000),
          pdf: true,
          shapefile: true,
        },
        user: {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
        },
      };

      axios
        .post(API_URL + "/extract", paramAPIExtract)
        .then(function (response) {
          console.log(response.data);
        });
    }
  }, []);

  return (
    <div className="bg-white h-screen">
      <div className="p-6 md:mx-auto">
        <div className="w-96 mx-auto my-6">
          <Lottie options={lottieConfig} style></Lottie>
        </div>

        <div className="text-center">
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment
            <br /> Your data is being processed and soon ready to download.
          </p>
          <button
            id="btntofiles"
            className="rounded bg-blue-600 p-2 text-white font-lato"
            onClick={() => navigation("/myfiles")}
          >
            To Download Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
