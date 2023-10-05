import React from "react";
import { mainmenu } from "../../utils/constants";
import { iconlist } from "../../utils/constants";
import { useProductContext } from "../../contexts";

const Menu = () => {  
  const {handleChangeIndex} = useProductContext()
  return (
    <div className="border border-gray-300 rounded-md p-5 text-xl">
      <div className="flex justify-between">
        <h1 className="font-bold"> Menu </h1>
        <h1 className="font-bold"> Icon </h1>
      </div>
      <hr className="mb-5 mt-2" />

      {mainmenu.map((val, idx) => (
        <button onClick={()=>handleChangeIndex(val.index) } key={idx} className="btn w-full  flex justify-between pl-4 text-base  my-2 rounded-md ">
          <div className="flex items-center justify-center">
            {" "}
            <img className="w-[30px] mr-3" src={iconlist[idx]} alt="" />
            <h1>{val.title}</h1>
          </div>
          <h1>+</h1>
        </button>
      ))}
    </div>
  );
};

export default Menu;
