import React, { useEffect, useState } from "react";
import Ornamen from "../components/ornamen";
import Lottie from "react-lottie";

const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Certificate({ username, email, licenseDate, persilID, orderID }) {
  const lottieConfig = {
    loop: false,
    autoplay: true,
    renderer: "svg",
    animationData: require("../assets/congrats2.json"),
  };
  const [releaseDate, setReleaseDate] = useState(null);

  useEffect(() => {
    if (licenseDate) {
      let d = new Date(licenseDate);
      setReleaseDate(
        `${monthName[d.getMonth()]},  ${d.getDate()} ${d.getFullYear()}`
      );
    }
  }, []);
  return (
    <div className="w-11/12 h-[calc(100vh_-_5rem)] max-w-3xl bg-gradient-to-br from-white to-gray-100 rounded-xl relative overflow-clip shadow-white drop-shadow-lg blur-md md:filter-none">
      <div className=" opacity-40">
        <Ornamen className="w-2/3 h-full absolute -right-4 -top-8" />
      </div>
      <div className="flex justify-center items-center w-full h-full select-none">
        <div className="border-2 border-yellow-400 w-[97%] h-[97%] rounded-xl">
          <div className="w-1/2 mx-8 mt-4 border-b-[2px] border-slate-400">
            <h1 className=" text-4xl tracking-wide">CERTIFICATE</h1>
            <p className="text-[#cd526a] font-bold text-lg tracking-widest">
              OF APPRECIATION
            </p>
          </div>
          <h2 className="mx-8 my-4 text-3xl font-extrabold font-publicsans tracking-widest">
            LAND BUYING
          </h2>

          <div className="mt-8 bg-gradient-to-r from-[#0777bd] to-[#a50fea] via-[#6dbfe2] w-3/5 -mx-10 rounded-3xl">
            <h2 className="text-white px-[4.5rem] font-lato font-bold tracking-wider uppercase py-1 text-sm">
              Proudly present to
            </h2>
          </div>

          <div className="z-10">
            <h1 className="text-7xl mt-8 font-windsong mx-8 font-semibold text-[#d25eac]">
              {username}
            </h1>

            <h2 className="mx-8 text-sm my-10">
              Order Number <span className="font-bold m-0 p-0">{orderID}</span>{" "}
              for buying {persilID.length} NIB. The NIB's are{" "}
              <span className="font-bold">
                {persilID.map((item, index) => {
                  return index === persilID.length - 1 ? item : item + ",";
                })}
              </span>{" "}
              quam consectetur laboriosam perspiciatis nostrum. Rem sed placeat
              sequi molestiae, harum maiores hic aliquam!
            </h2>
            <div className="w-full flex justify-between my-4">
              <div className="mx-8 w-1/2 justify-between items-center flex">
                <h2>{releaseDate}</h2>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/dangermond.png"}
                    alt="logoatrbpn"
                    className="h-12 mr-1"
                  />
                  <p className="text-center">Jack Voldermont</p>
                </div>
              </div>

              <div className="absolute flex right-5 bottom-5">
                <img
                  src={process.env.PUBLIC_URL + "/esrilogo.png"}
                  alt="esri logo"
                  className="h-6 mr-1"
                />
                Indonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
