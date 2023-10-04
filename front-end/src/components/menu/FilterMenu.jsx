import React from "react";
import { filtermenu } from "../../utils/constants";
import { IndexFilter } from "../filters/index";
import Filter_SelectType from "../filters/Filter_SelectType";
import Filter_Prices from "../filters/Filter_Prices";
import Filter_Rating from "../filters/Filter_Rating";



const FilterMenu = () => {
  const filters = [<Filter_Rating/>, <Filter_Prices/> ,<Filter_SelectType/>]
  return (
    <div className="mt-2 border border-gray-300 rounded-md  p-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl"> Filters </h1>
        <h1 className="font-bold"> Icon </h1>
      </div>
      <hr className="mb-5 mt-2" />

      {IndexFilter.map((val, idx) => (
        <div
          key={idx}
          className=" w-full font-semibold   p-3 text-base  my-2 rounded-md bg-gray-100"
        >
          <div className="flex flex-col justify-between ">
            <h1 className="mb-5">{val.title}</h1>
            {filters[idx]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
