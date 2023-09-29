import React, { useEffect, useState } from "react";
import { Banner } from "../components/banner/Banner";
import MainMenu from "../components/menu/MainMenu";
import { useProductContext } from "../contexts";

const Home = () => {
  const {products} = useProductContext()
  return (
    <>
      <div className="container mx-auto">
        <Banner/>
        <div className="mt-2 grid grid-cols-4 gap-3">
          <div className="col-span-1">
            <MainMenu/>
            <MainMenu/>
          </div>
          <div className="col-span-3">
            <div className="border border-gray-300 h-[500px] rounded-md bg-gray-100">
                {products}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
