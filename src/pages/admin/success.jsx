import React, { useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_GATEWAY;

function Success() {
  const navigation = useNavigate();
  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../../assets/paymentsuccess.json"),
  };
  const [loadingDownload, setLoading] = useState(false)


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
            className="rounded bg-blue-600 p-2 text-white font-lato"
            onClick={() => navigation("/admin")}
          >
            To Download Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
