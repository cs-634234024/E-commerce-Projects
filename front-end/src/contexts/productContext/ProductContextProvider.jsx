import axios from "axios";
import { createContext, useState } from "react";
import React from "react";

export const ProductContext = createContext();
const products = "testproducts"

const ProductContextProvider = ({ children }) => {
  const [newProductData , setNewProductData] = useState([])
  const newProductsFilter = async() => {
    const res = await axios.get("http://localhost:3000/api/product/new")
    if(res.status === 200 || res.status === 201){
      console.log(newProductData);
      setNewProductData(res.data)
    }
  }

  return (
    <ProductContext.Provider value={{products , newProductData , newProductsFilter}}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
