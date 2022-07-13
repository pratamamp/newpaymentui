import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigation = useNavigate();
  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../../assets/paymentsuccess.json"),
  };

  return (
    <div className="bg-white h-screen">
      <div className="p-6 md:mx-auto">
        <div className="w-96 mx-auto my-6">
          <Lottie options={lottieConfig}></Lottie>
        </div>

        <div className="text-center">
          <p className="text-gray-600 my-2">
            An email has been send to your email@domain.com.
            <br /> Please check for an email from company.
          </p>
          <button
            className="rounded bg-blue-600 p-2 text-white font-lato"
            onClick={() => navigation("/admin")}
          >
            Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
