import React from "react";
import Lottie from "react-lottie";
import { SiGentoo } from "react-icons/si";
import { Link } from "react-router-dom";

function Home() {
  const lottieConfig = {
    loop: true,
    autoplay: true,
    renderer: "svg",
    animationData: require("../assets/earth.json"),
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
                    <Lottie options={lottieConfig} />
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
              <div className="flex flex-wrap w-full mt-2 -mx-4 text-left">
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <svg
                    width={42}
                    height={42}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16 32.076L30 24.065V8.05701L16 16.067V32.076Z"
                        fill="#000001"
                      />
                      <path
                        d="M19 24.5556V27L25 23.4444V21L19 24.5556Z"
                        fill="white"
                      />
                      <path
                        d="M16 0.076004L2 8.057V24.065L16 32.076V16.067L30 8.057L16 0.076004Z"
                        fill="url(#paint0_linear)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="2.18"
                        y1="23.255"
                        x2="30.041"
                        y2="8.782"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.043" stopColor="#FF8618" />
                        <stop offset="0.382" stopColor="#FF246E" />
                        <stop offset="0.989" stopColor="#AF1DF5" />
                      </linearGradient>
                      <clipPath id="clip0">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <svg
                    width={42}
                    height={42}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={16} cy={16} r={14} fill="#FF3366" />
                    <path
                      d="M11.3594 10.8594C12.3259 10.8594 13.1094 10.0759 13.1094 9.10938C13.1094 8.14288 12.3259 7.35938 11.3594 7.35938C10.3929 7.35938 9.60938 8.14288 9.60938 9.10938C9.60938 10.0759 10.3929 10.8594 11.3594 10.8594Z"
                      fill="white"
                    />
                    <path
                      d="M7.70312 12.3594L7.09375 14.5938H9.09375C8.69271 16.224 7.85312 19.6531 7.70312 20.3281C7.51562 21.1719 7.48433 23.5781 10.0156 23.5781C11.7824 23.5781 12.9093 22.4368 13.5379 21.5048L13.0625 23.4062H15.9062L17.3906 17.3981C17.6016 16.3984 18.0981 14.4688 19.8906 14.4688C22.0225 14.4688 21.2404 16.9933 20.8571 18.2305C20.8415 18.2809 20.8266 18.3291 20.8125 18.375C20.525 19.3125 20.2188 20.4062 20.2188 21.1562C20.2188 22 20.6094 23.5781 22.7969 23.5781C24.9844 23.5781 25.9167 21.4115 26.1094 20.3281L25 19.875C24.9219 20.4531 24.2188 21.7031 23.5625 21.7031C22.6641 21.7031 23.1154 20.1885 23.597 18.5721C23.8106 17.8551 24.0302 17.1181 24.1406 16.4844C24.4198 14.8821 24.1406 12.1562 21.3594 12.1562C19.632 12.1562 18.2756 13.6955 17.6303 14.7641L18.1719 12.3594H13.8438L13.25 14.5938H15.2656C15.2656 14.5938 14.0695 19.4683 13.9922 19.6211C13.1797 21.2266 11.9508 21.7655 11.0312 21.7031C10.2938 21.6531 10.3802 20.7656 10.5156 20.3281L12.5156 12.3594H7.70312Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <svg
                    width={42}
                    height={42}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                      fill="#1ABCFE"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                      fill="#0ACF83"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                      fill="#FF7262"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                      fill="#F24E1E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                      fill="#A259FF"
                    />
                  </svg>
                </div>
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <svg
                    width={42}
                    height={42}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.58991 11C2.5245 11 -0.0510283 13.5306 0.000767908 16.5905C0.0516066 19.5934 2.54027 22 5.59027 22C6.8999 22 8.10608 21.5563 9.06016 20.812C10.0143 21.5562 11.2205 22 12.5302 22C13.8398 22 15.046 21.5563 16.0001 20.812C16.9542 21.5562 18.1604 22 19.4701 22C20.7798 22 21.986 21.5563 22.94 20.812C23.8942 21.5562 25.1004 22 26.4101 22C29.4597 22 31.9484 19.5938 31.9992 16.5905C32.051 13.5304 29.4754 11 26.4099 11C25.1111 11 23.9003 11.4542 22.94 12.2104C21.9795 11.4542 20.7686 11 19.4698 11C18.171 11 16.9603 11.4542 15.9999 12.2104C15.0396 11.4542 13.8288 11 12.53 11C11.2312 11 10.0204 11.4542 9.06004 12.2105C8.09965 11.4542 6.88874 11 5.58991 11ZM12.5302 20.7518C11.5705 20.7518 10.6833 20.4441 9.96546 19.9232C10.7071 19.0067 11.1581 17.8512 11.1794 16.5905C11.2016 15.2766 10.7395 14.0604 9.96228 13.1002C10.686 12.5665 11.578 12.2482 12.53 12.2482C13.4821 12.2482 14.374 12.5665 15.0977 13.1001C14.3204 14.0604 13.8582 15.2768 13.8803 16.5906C13.9018 17.8512 14.3529 19.0068 15.0947 19.9233C14.3769 20.4442 13.4898 20.7518 12.5302 20.7518ZM9.91349 16.5697C9.92973 15.6102 9.60767 14.7149 9.06006 13.9908C8.51245 14.7149 8.19039 15.6102 8.20663 16.5697C8.22228 17.4943 8.5373 18.3464 9.06013 19.0368C9.58286 18.3464 9.89783 17.4944 9.91349 16.5697ZM6.94071 16.5905C6.91847 15.2766 7.38057 14.0604 8.15783 13.1002C7.43411 12.5665 6.54203 12.2482 5.58991 12.2482C3.2229 12.2482 1.22685 14.2162 1.26669 16.5697C1.30595 18.8891 3.2289 20.7518 5.59027 20.7518C6.54983 20.7518 7.43703 20.4442 8.15483 19.9232C7.41304 19.0067 6.96205 17.8512 6.94071 16.5905ZM18.1193 16.5905C18.1416 15.2766 17.6795 14.0604 16.9022 13.1001C17.6258 12.5665 18.5178 12.2482 19.4698 12.2482C20.4219 12.2482 21.314 12.5665 22.0378 13.1002C21.2605 14.0604 20.7984 15.2766 20.8206 16.5905C20.8419 17.8512 21.2929 19.0067 22.0347 19.9232C21.3169 20.4442 20.4297 20.7518 19.4701 20.7518C18.5105 20.7518 17.6233 20.4441 16.9054 19.9232C17.6471 19.0067 18.098 17.8512 18.1193 16.5905ZM22.0865 16.5697C22.0703 15.6102 22.3924 14.7148 22.94 13.9907C23.4877 14.7148 23.8097 15.6102 23.7934 16.5697C23.7777 17.4944 23.4627 18.3464 22.94 19.0368C22.4172 18.3464 22.1022 17.4943 22.0865 16.5697ZM26.4101 20.7518C25.4504 20.7518 24.5632 20.4441 23.8453 19.9232C24.587 19.0068 25.0379 17.8513 25.0593 16.5906C25.0817 15.2765 24.6196 14.0603 23.8423 13.1001C24.5659 12.5665 25.4579 12.2482 26.4099 12.2482C28.7771 12.2482 30.7732 14.216 30.7333 16.5697C30.694 18.8895 28.7711 20.7518 26.4101 20.7518ZM16.8534 16.599C16.8696 15.6395 16.5476 14.7442 15.9999 14.0201C15.4523 14.7442 15.1303 15.6395 15.1465 16.599C15.1622 17.5236 15.4772 18.3757 16 19.0661C16.5227 18.3757 16.8377 17.5237 16.8534 16.599Z"
                      fill="black"
                    />
                  </svg>
                </div>
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
              <img
                src="images/graphic.svg"
                className="w-2/3 ml-auto -mb-12"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
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
              <img
                src="images/ui-design.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
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
              <img
                src="images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
