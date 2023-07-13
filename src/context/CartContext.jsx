import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
