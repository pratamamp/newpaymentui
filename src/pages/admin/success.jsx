import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRandomId } from "../../helper/randomId";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

// const API_URL = process.env.REACT_APP_API_GATEWAY;
const API_URL = process.env.REACT_APP_API_EXTRACT;

function Success() {
  const navigation = useNavigate();
  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../../assets/paymentsuccess.json"),
  };

  const auth = useAuth();
  const { cartList } = useCart();
  const [processing, setProcessing] = useState(false);

  function extractData() {
    let currentUser = jwtDecode(auth.user.token).data;

    setProcessing(true);
    document.getElementById("btntofiles").disabled = true;
    let param = {
      spatial: {
        nib: cartList.map((row, i) => {
          if (row) return row.nib;
        }),
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
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
      },
    };

    axios
      .post(API_URL + "/extract", param)
      .then(function (response) {
        console.log(response.data);
        document.getElementById("btntofiles").disabled = false;
        setProcessing(false);
      })
      .catch(function (err) {
        setProcessing(false);
        document.getElementById("btntofiles").disabled = true;
      });
  }

  useEffect(() => {
    if (cartList.length !== 0) {
      extractData();
    }

    return () => {
      console.log("useeffect cleanup");
    };
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
            className="rounded bg-blue-600 p-2 text-white font-lato disabled:opacity-50"
            onClick={() => navigation("/admin/myfiles")}
          >
            {processing ? (
              <>
                <svg
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Please wait..
              </>
            ) : (
              "To Download Page"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
