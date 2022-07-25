import React from "react";
import Lottie from "react-lottie";
import { SiGentoo } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import MidtransLogo from "../assets/logomidtrans";

function Home() {
  const navigate = useNavigate();

  const lottieConfig = {
    loop: true,
    autoplay: true,
    renderer: "svg",
    animationData: require("../assets/earth.json"),
    mode: "scroll",
  };
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 to-purple-900">
      <header>
        <nav className="fixed inset-x-0 z-10 w-full border-b bg-white md:absolute md:bg-transparent">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0">
              <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <SiGentoo className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-100 font-lato">
                    PayLand
                  </span>
                </a>
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative w-10 h-10 -mr-2 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                  />
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                  />
                </button>
              </div>
              <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                <div className="text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                    <li className="block md:px-4 transition hover:text-sky-300">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="block md:px-4 transition hover:text-sky-300">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="block md:px-4 transition hover:text-sky-300">
                      <Link to="/license">License</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full space-y-2 border-sky-200 lg:space-y-0 md:w-max lg:border-l">
                  <button
                    type="button"
                    title="Start Sign up"
                    className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-sky-300 font-semibold text-sm hover:text-gray-100">
                      Sign up
                    </span>
                  </button>
                  <button
                    type="button"
                    title="Start Contact"
                    className="w-full py-3 px-6 text-center rounded-full transition bg-blue-500 hover:bg-blue-300 sm:w-max"
                  >
                    <span className="block text-gray-100 font-semibold text-sm">
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                  <div className="relative">
                    <Lottie
                      options={lottieConfig}
                      isClickToPauseDisabled
                      style={{ cursor: "default" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Staking Land
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-100 md:text-7xl lg:text-5xl">
                Monetize your information in the new way
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-200">
                Just as physical land owners can profit from the information on
                their land, as a buyer can get a license for the land
                information.
              </p>
              <div className=" w-full">
                <button
                  className=" rounded-xl bg-yellow-400 p-2 text-blue-800 px-3 font-publicsans transition duration-500 ease-in-out transform hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Start Monetize
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-10">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">
                  Graphic Design
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-purple-600">
                  Know more
                </a>
              </div>
              ITEM 1
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">
                  UI Design
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-purple-600">
                  Know more
                </a>
              </div>
              ITEM 2
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">
                  UX Design
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-purple-600">
                  Know more
                </a>
              </div>
              ITEM 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
