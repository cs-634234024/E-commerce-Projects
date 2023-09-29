import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto shadow-sm flex justify-around items-center p-5">
        <div className="text-3xl"> LOGO PUBLIC   </div>
        <div className="flex font-semibold">
          <div className="mx-3"> Home </div>  
          <div className="mx-3"> About </div>  
          <div className="mx-3"> Service </div>  
        </div>
        <div className="flex">
          <Link className="border border-gray-300 py-2 px-3 rounded-md mx-3 text-white bg-gray-500" to={"/signup"}> Sign Up </Link>
          <Link className="border border-gray-300 py-2 px-3 rounded-md mx-3 text-white bg-gray-500" to={"/signIn"}> Sign In </Link>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
