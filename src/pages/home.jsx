import React from 'react'
import Lottie from 'react-lottie'
import {SiGentoo} from 'react-icons/si'


function Home() {
    const lottieConfig = {
        loop: true,
        autoplay: true,
        renderer: 'svg',
        animationData: require('../assets/earth.json')
    }
  return (
    <div className="relative w-full">
  <header>
    <nav className="fixed z-10 w-full border-b bg-white md:absolute md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0">
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
            <a
              href="#"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <div aria-hidden="true" className="flex space-x-1">
                <SiGentoo className='w-10 h-10' />
              </div>
              <span className="text-2xl font-bold text-gray-900 font-lato">PayLand</span>
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
            <div className="text-gray-600 lg:pr-4">
              <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>License</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
              >
                <span className="block text-yellow-800 font-semibold text-sm">
                  Sign up
                </span>
              </button>
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
              >
                <span className="block text-yellow-900 font-semibold text-sm">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div>
    <img
      className="absolute w-full object-cover object-top h-[90vh] inset-0 top-[4.68rem]"
      src={process.env.PUBLIC_URL+"/bg2.webp"}
      alt="image"
      loading="lazy"
    />
    
    <div className="relative bg-blue-800 container border-l border-r m-auto px-6 md:px-12 lg:px-7">
      <div className="py-40 lg:py-56 md:w-9/12 lg:w-7/12 ml-auto">
        <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
          Shaping a world with an endless{" "}
          <span className="text-yellow-600">imagination.</span>
        </h1>
        <p className="mt-8 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
          nam itaque sed eius modi error totam sit illum. Voluptas doloribus
          asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
        </p>
        <div className="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
          <button
            type="button"
            title="Start buying"
            className="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
          >
            <span className="block text-yellow-800 font-semibold text-sm">
              About us
            </span>
          </button>
          <button
            type="button"
            title="Start buying"
            className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
          >
            <span className="block text-yellow-900 font-semibold text-sm">
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home