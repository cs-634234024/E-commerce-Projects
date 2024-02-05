import { createContext } from "react";
import { useState } from "react";
import { notify } from "../../utils/notify";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [dataInCart, setDataInCart] = useState([]);

  const addQty = (id, newqty) => {
    console.log(id);
    console.log(newqty);
    console.log(dataInCart);
    const updateQty = dataInCart.map((value) =>
      value.id === id ? { ...value, qty: newqty } : value
    );
    setDataInCart(updateQty);
  };

  const removeCart = (id) => {
    const deletedId = dataInCart.filter((value) => value.id !== id);
    setDataInCart(deletedId);
  };

  const addCart = (data) => {
    setDataInCart([...dataInCart, data]);
    notify("success", "Add Product in Cart Success");
    window.scrollTo(0, 0);
  };
  console.log(dataInCart);
  const carttest = "carttest";
  return (
    <CartContext.Provider
      value={{ carttest, dataInCart, addCart, removeCart, addQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
