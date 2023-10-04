import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import FilterMenu from "../components/menu/FilterMenu";


import { useProductContext } from "../contexts";

const Home = () => {
  const { products, newProductData } = useProductContext();
  return (
    <>
      <div className="container mx-auto">
      <Banner/>
        <div className="mt-2 grid grid-cols-4 gap-3">
          <div className="col-span-1">
            <Menu/>
            <FilterMenu/>
          </div>
          <div className="col-span-3">
            <div className="border border-gray-300 h-[900px]  rounded-md  p-5">
              <h1></h1>
              <div className="grid grid-cols-4 gap-5">
                {newProductData.map((val, idx) => (
                  <div className="border border-gray-300 p-5 bg-slate-50 shadow-md rounded-md flex flex-col" key={idx}>
                    <div className="mb-5"> {val.p_name} </div>
                    <div className="mb-5"> {val.p_detail} </div>
                    <div className="mb-5"> {val.p_price} </div>
                    <div className="mb-5"> {val.p_rating} </div>
                    <div className="flex justify-center">
                      <button className="py-2 px-3 border border-gray-300 rounded-md"> Add to cart </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
