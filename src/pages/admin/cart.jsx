import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";
import { formatRupiah } from "../../helper/currency";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_GATEWAY;
const FEATURE_URL =
  "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/persil_dummy_monetisasi/FeatureServer/1";

function Cart() {
  const { cartList, setCartList } = useCart();
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [itemPrice, setItemPrice] = useState(10000);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const navigate = useNavigate();

  function submitCheckout(e) {
    if (totalPrice > 0) {
      const localData = JSON.parse(localStorage.getItem("authInfo"));
      if (!localData) {
        navigate("/login");
        return null;
      }

      const user = jwtDecode(localData.token);
      if (user) {
        const config = {
          headers: {
            Authorization: localData.token,
          },
        };

        const itemCartLocaldata = JSON.parse(localStorage.getItem("cart"));
        if (itemCartLocaldata.length > 0) {
          setLoadingPayment(true);
          const data = {
            spatial: {
              id: user.data.id,
              objectid: itemCartLocaldata.map((item) => {
                return item.objectid;
              }),
              gis_service_url: FEATURE_URL,
              name: "new transaction",
              price: totalPrice,
              type: "Land",
            },
            user: {
              id: user.data.id,
              name: user.data.name,
              email: user.data.email,
            },
          };
          axios
            .post(`${API_URL}/orders`, data, config)
            .then((response) => {
              const url = response.data.data.snap_url;
              window.open(url, "_self");
            })
            .catch((err) => {
              navigate("/login", { replace: true });
            });
        }
      }
    }
  }

  function removeItemCart(index) {
    setCartList((a) => a.filter((_, i) => i !== index));
  }

  useEffect(() => {
    // whether doesnt have item at cart
    let localData = JSON.parse(localStorage.getItem("cart"));
    if (localData.length <= 0) {
      navigate("/admin/map", { replace: true });
    }
  }, []);
  useEffect(() => {
    if (cartList.length > 0) {
      let sum = 0;
      cartList.forEach((item) => {
        sum += itemPrice;
      });
      setSubTotal(sum);
    } else {
      setSubTotal(0);
      setTotalPrice(0);
      setDiscount(0);
      setShipping(0);
    }
  }, [cartList]);

  useEffect(() => {
    setTotalTax(((subTotal + shipping - discount) * 11) / 100);
    setTotalPrice(subTotal + totalTax);
  }, [subTotal, totalTax]);

  return (
    <div className="bg-gray-100 h-[calc(100vh_-_5rem)] overflow-y-auto no-scrollbar lg:flex">
      <div className="lg:w-2/3 lg:mt-4 lg:p-4">
        <div className="px-4 space-y-2">
          <h1 className="lg:text-2xl">Shopping Cart</h1>
          <ul className="border-t-2 border-b-2 space-y-2 lg:h-[calc(100vh_-_19rem)] no-scrollbar lg:overflow-y-auto">
            {cartList &&
              cartList.map((item, index) => {
                return (
                  <li
                    className="flex flex-col py-6 sm:flex-row sm:justify-between"
                    key={index}
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-coolGray-500"
                        src="https://images.unsplash.com/photo-1582909184893-1492bc753037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80 411w"
                        alt="Polaroid camera"
                      />

                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="font-semibold leading-snug sm:pr-8">
                              {`NIB : ${item.nib}`}
                            </h3>
                            <p className="text-sm">
                              {item.kelurahan},{item.kecamatan}, {item.kota}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="">{formatRupiah(itemPrice)}</p>
                          </div>
                        </div>

                        <div className="flex text-sm divide-x">
                          <button
                            className="items-center px-2 py-1 pl-0 flex space-x-1"
                            onClick={() => removeItemCart(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>

          <div className="lg:w-1/3 lg:float-right">
            <div className="flex justify-between">
              <h2 className="text-sm text-gray-600">SUBTOTAL</h2>
              <p className="">{formatRupiah(subTotal)}</p>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm text-gray-600">SHIPPING</h2>
              <p className=" font-thin">FREE</p>
            </div>

            <div className="flex border-t-2 justify-between">
              <h2 className="text-sm">TOTAL</h2>
              <p className="font-semibold">
                {formatRupiah(subTotal + shipping)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex-1 mt-4 p-4">
        <div className="bg-violet-50 rounded-md px-4 space-y-4">
          <h2 className="text-xl pt-3">Payment Info</h2>
          <div className="border-2 rounded-md p-2 mt-4">
            <img
              src={process.env.PUBLIC_URL + "/midtranslogo.png"}
              alt="midtranslogo"
              className="p-4 lg:p-0"
            />
            <p className="text-xs font-thin">
              You will be redirected to the Midtrans website after submitting
              your order
            </p>
          </div>

          <div className="space-y-1">
            <h2 className=" font-publicsans text-lg">Discount Codes</h2>
            <input
              type="text"
              placeholder="Enter your coupon code"
              className=" focus:outline-none py-3 px-1 text-xs w-full rounded-md"
            />
          </div>

          <div className="border-b-2">
            <h2 className=" font-publicsans text-lg my-2">Billing Summary</h2>

            <div className=" text-sm space-y-2 flex flex-col justify-center">
              <div className="flex justify-between">
                <h2 className="text-gray-600">SUBTOTAL</h2>
                <p className=" text-base">{formatRupiah(subTotal)}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-600">DISCOUNT</h2>
                <p className=" font-base text-red-600">
                  - {formatRupiah(discount)}
                </p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-600">SHIPPING</h2>
                <p className="font-base">{formatRupiah(shipping)}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-600">TAX (11%)</h2>
                <p className=" font-thin">{formatRupiah(totalTax)}</p>
              </div>

              <div className=" text-base flex py-3 border-t-2 justify-between">
                <h2>GRAND TOTAL</h2>
                <p className=" text-blue-500">{formatRupiah(totalPrice)}</p>
              </div>
            </div>
          </div>
          <textarea
            name="comment"
            id="comment"
            placeholder="order comment"
            className="w-full h-16 font-thin text-sm focus:outline-none rounded-md px-1 bg-gray-50"
          ></textarea>

          <button
            className="rounded-md bg-blue-600 w-full p-2 mb-2 text-white text-sm hover:bg-blue-500"
            onClick={submitCheckout}
          >
            Pay {formatRupiah(totalPrice)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
