import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "react-lottie";

// const API_URL = "https://212-2-247-200.nip.io:30443";

function Success() {
  const navigate = useNavigate();
  const [loadingDownload, setLoadingDownload] = useState(false);
  const API_URL = process.env.REACT_APP_API_GATEWAY;

  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../assets/paymentsuccess.json"),
  };
  const [arrData, updateArrData] = useState([]);

  function onDownloadPage(e) {
    // navigate("/list");
    setLoadingDownload(true);
    let objIds = JSON.parse(localStorage.getItem("cartItems"));
    let arrObjId = objIds.map((row, i) => {
      if (row) {
        return row.nib;
      }
    });

    document.getElementById("btnDownloadData").disabled = true;
    let paramAPIExtract = {
      spatial: {
        nib: arrObjId,
        restserviceurl:
          "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/persil_dummy_monetisasi/FeatureServer/1/query",
        attribute: ["*"],
      },
      transaction: {
        order_id: 123,
        pdf: true,
        shapefile: true,
      },
      user: {
        id: 1,
        name: "agung",
        email: "abesti@esriindonesia.co.id",
      },
    };

    axios
      .post(API_URL + "/extract", paramAPIExtract)
      .then(function (response) {
        const element = document.createElement("a");
        element.setAttribute("href", "https://" + response.data.link_shapefile);
        element.setAttribute("target", "_blank");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        setLoadingDownload(false);
        document.getElementById("btnDownloadData").disabled = false;
      })
      .catch(function (error) {
        setLoadingDownload(false);
        document.getElementById("btnDownloadData").disabled = false;
        console.log("error check", error);
      });
  }
  function finishTransaction() {
    navigate("/");
  }
  return (
    <div className="bg-white h-screen">
      <div className="bg-gray-100 p-6 md:mx-auto">
        {/* <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-20 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg> */}
        <div className=" w-96 mx-auto my-6">
          <Lottie options={lottieConfig}></Lottie>
        </div>
        <div className="text-center">
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day! </p>
          <div className="py-10 text-center">
            <button
              id="btnDownloadData"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 shadow-lg"
              onClick={(e) => onDownloadPage(e)}
            >
              {loadingDownload ? (
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
                "Download Data"
              )}
            </button>
          </div>
          <button className="text-green-400 px-3" onClick={finishTransaction}>
            back to home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
