import React from "react";
import { FaTrashAlt, FaCartPlus } from "react-icons/fa";
import { useCart } from "../../hooks/cart";
import { usePersilSelect } from "../../hooks/persil";

function SelectedItem({ product, index }) {
  const { cartList, setCartList } = useCart();
  const { list, updateList } = usePersilSelect();

  function removeItemFromList() {
    updateList((a) => a.filter((_, i) => i !== index));
  }
  function addToCart() {
    setCartList([...cartList, product]);
    removeItemFromList();
  }

  return (
    <li className="bg-gray-100 shadow-lg rounded p-2">
      <h3 className="font-bold">{`NIB : ${product.nib}`}</h3>
      <p className="my-2 text-gray-700">
        {product.kelurahan} <br />
        {product.kecamatan}
      </p>
      <br />
      <div className="flex justify-between">
        <p className="font-semibold text-green-800">200000</p>
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-600 rounded p-2 h-8 flex justify-center items-center text-white hover:bg-gray-800">
            <FaTrashAlt />
          </button>
          <button
            className="bg-green-500 h-8 rounded p-2 text-white flex justify-center items-center hover:bg-green-600"
            onClick={addToCart}
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </li>
  );
}

export default SelectedItem;
