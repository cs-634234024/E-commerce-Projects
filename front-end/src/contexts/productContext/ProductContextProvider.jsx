import { createContext } from "react";
import React from "react";

export const ProductContext = createContext();
const products = "testproducts"

const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
