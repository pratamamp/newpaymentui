import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartList, setCartList] = useState(() => {
    const notes = localStorage.getItem("cart");
    return notes ? JSON.parse(notes) : [];
  });

  const contextValues = {
    cartList,
    setCartList,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
