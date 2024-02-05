import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import FilterMenu from "../components/menu/FilterMenu";
import CardProduct from "../components/card/CardProduct";

import { useProductContext } from "../contexts";

const Home = () => {
  const { product, titleProductsPage, indexmenu } = useProductContext();
  return (
    <>
      <div className="container mx-auto">
        <Banner />
        <div className="mt-2 grid grid-cols-4 gap-3">
          <div className="col-span-1">
            <Menu />
            <FilterMenu />
          </div>
          <div className="col-span-3">
            <div className="border border-gray-300 rounded-md p-5">
              <h1 className="text-3xl font-bold mb-3">{titleProductsPage}</h1>
              <hr className="mb-3" />
              <div className="grid grid-cols-3 gap-3">
                {indexmenu === null ? (
                  <div> test </div>
                ) : (
                  <>
                    {product.map((val, idx) => (
                      <>
                        <div key={idx}>
                          <CardProduct
                            id={val.product_id}
                            title={val.p_name}
                            detail={val.p_detail}
                            price={val.p_price}
                            rating={val.p_rating}
                            image={val.p_image}
                          />
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
