import React from "react";
import { FaBeer } from 'react-icons/fa';
import { useAuthContext } from "../../contexts";

const NavbarPrivate = () => {
  const {handleLogout} = useAuthContext()
  return  (
    <>
      <nav className="container mx-auto shadow-sm flex justify-around items-center p-5">
        <div className="text-3xl"> LOGO Private  </div>
        <div className="flex font-semibold">
          <div className="mx-3"> Home </div>  
          <div className="mx-3"> About </div>  
          <div className="mx-3"> Service </div>  
        </div>
        <div className="flex">
          <button onClick={handleLogout} className="py-2 px-3 rounded-md font-bold border border-gray-300"> Logout </button>    
        </div>
      </nav>
    </>
  );
};

export default NavbarPrivate;
