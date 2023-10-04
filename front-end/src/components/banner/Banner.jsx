import React from "react";
import orange from "../../assets/images/banner/orange.png";
import green from "../../assets/images/banner/green.png";
import pink from "../../assets/images/banner/pink.png";

const Banner = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 ">
        <div className=" bg-green-200 rounded-l-md ">
          <img src={green} alt="Burger" />
        </div>
        <div className=" bg-orange-200">
          <img src={orange} alt="Burger" />
        </div>
        <div className=" bg-red-200 rounded-r-md ">
          <img src={pink} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
