import React from "react";
import { mainmenu } from "../../utils/constants";

const MainMenu = () => {
  return (
    <div className="p-5 border border-gray-300 rounded-md mb-3 bg-gray-200">
      <h1 className="mb-5 font-semibold text-xl uppercase"> Main menu</h1>
      {mainmenu.map((val, idx) => (
        <div className="flex justify-between p-3 text-lg" key={idx}>
            <h1> {val} </h1>
            <h1> + </h1>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
