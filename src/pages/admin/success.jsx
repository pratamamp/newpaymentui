import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRandomId } from "../../helper/randomId";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

// const API_URL = process.env.REACT_APP_API_GATEWAY;
const API_URL = "https://bestie.ngrok.io";

function Success() {
  const { cartList } = useCart();
  const navigation = useNavigate();
  const auth = useAuth();

  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../../assets/paymentsuccess.json"),
  };
  const [searchParams] = useSearchParams();
  const [userInfo, setUser] = useState();

  useEffect(() => {
    startProcessExtract();
  }, []);

  function startProcessExtract() {
    let arrObjId = cartList.map((row, i) => {
      if (row) return row.nib;
    });
    let userInfo = jwtDecode(auth.user.token).data;
    if (userInfo) {
      let paramAPIExtract = {
        spatial: {
          nib: arrObjId,
          restserviceurl:
            "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/persil_dummy_monetisasi/FeatureServer/1/query",
          attribute: ["*"],
        },
        transaction: {
          order_id: searchParams.get("id") || getRandomId(10000),
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
      // console.log(paramAPIExtract);
    }
  }
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
            onClick={() => navigation("/admin/myfiles")}
          >
            To Download Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
