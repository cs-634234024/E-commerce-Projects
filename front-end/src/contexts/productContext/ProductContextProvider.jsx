import axios from "axios";
import { createContext, useState } from "react";
import React from "react";

export const ProductContext = createContext();
const products = "testproducts";

const ProductContextProvider = ({ children }) => {
  const [titleProductsPage , setTitleProductsPage] = useState("Page1")
  const [tag , setTage] = useState({})
  const [product , setProduct] = useState([]);
  const [indexmenu, setIndexMenu] = useState(null);

  const handleChangeIndex = (idx) => {
    if(idx === 1){
      setIndexMenu(idx)
      newProductsFilter()
      setTage({title:'Best Seller' , color: "#CD6155"})
      setTitleProductsPage("Best Seller")
    }else if(idx === 2){
      setIndexMenu(idx)
      topRatingProductFilter()
      setTage({title:'Top Rating' , color: "#F1C40F"})
      setTitleProductsPage("Top Rating")
    }else if(idx === 3){
      setIndexMenu(idx)
      newProductsFilter()
      setTage({title:'New' , color: "#E74C3C"})
      setTitleProductsPage("New Products")
    }else if(idx === 4){
      setIndexMenu(idx)
      newProductsFilter()
      setTage({title:'Top sale' , color: "#148F77"})
      setTitleProductsPage("Top Sale")
      
    }else if(idx === 5){
      setIndexMenu(idx)
      unisexProductFilter()
      setTage({title:'Unisex' , color: "gray"})
      setTitleProductsPage("Unisex")
      
    }else if(idx === 6){
      setIndexMenu(idx)
      femenProductFilter()
      setTage({title:'Femen' , color: "pink"})
      setTitleProductsPage("Femen's")
      
    }else if(idx === 7){
      setIndexMenu(idx)
      menProductFilter()
      setTage({title:'Men' , color: "#2E86C1"})
      setTitleProductsPage("Men's")
    }else{
      unisexProductFilter()
    }
  };




  const newProductsFilter = async () => {
    const res = await axios.get("http://localhost:3000/api/product/new");
    if (res.status === 200 || res.status === 201) {
      setProduct(res.data);
      console.log(product);
    }
  };

  const topRatingProductFilter = async () => {
    const res = await  axios.get("http://localhost:3000/api/product/rating");
    setProduct(res.data)
    console.log(product);
  }

  const menProductFilter = async () =>{
    const res = await  axios.get("http://localhost:3000/api/product/men");
    setProduct(res.data)
    console.log(product);
  }

  const femenProductFilter = async () =>{
    const res = await  axios.get("http://localhost:3000/api/product/femen");
    setProduct(res.data)
    console.log(product);
  }

  const unisexProductFilter = async () =>{
    const res = await  axios.get("http://localhost:3000/api/product/");
    setProduct(res.data)
    console.log(product);
  }

  return (
    <ProductContext.Provider
      value={{ products, newProductsFilter, handleChangeIndex ,product , titleProductsPage , tag , indexmenu}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
