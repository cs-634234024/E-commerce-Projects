import React from "react";
import { mainmenu } from "../../utils/constants";
import { iconlist } from "../../utils/constants";

const Menu = () => {
  

  return (
    <div className="border border-gray-300 rounded-md p-5 text-xl">
      <div className="flex justify-between">
        <h1 className="font-bold"> Menu </h1>
        <h1 className="font-bold"> Icon </h1>
      </div>
      <hr className="mb-5 mt-2" />

      {mainmenu.map((val, idx) => (
        <button key={idx} className="btn w-full  flex justify-between p-3 text-base  my-2 rounded-md ">
          <div className="flex ">
            {" "}
            <img className="w-[30px] mr-2" src={iconlist[idx]} alt="" />
            <h1>{val}</h1>
          </div>
          <h1>+</h1>
        </button>
      ))}
    </div>
  );
};

export default Menu;
