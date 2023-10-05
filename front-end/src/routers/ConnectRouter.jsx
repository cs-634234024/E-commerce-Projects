import React from "react";
import { Outlet, Route, Routes, redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import { useNavigate } from "react-router-dom";
import SignIn from "../pages/SIgnIn";
import { useAuthContext } from "../contexts";
import Navbar from "../components/Navbar/Navbar";
import NavbarPrivate from "../components/Navbar/NavbarPrivate";
import Cart from "../pages/Cart";



const ConnectRouter = () => {
  const navigate = useNavigate()
  const { token , userinfo } = useAuthContext();
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <>
            {!!token === true ? <NavbarPrivate /> : <Navbar />}
            <Home />
          </>
        }
      />
      <Route path="/cart" element={<>
        {!!token === true ? <>
        <NavbarPrivate/>
        <Cart/>
        </> : setTimeout(() => {
          navigate('/signin')
        }, 1000)}
      </>}/>
      
    </Routes>
  );
};

export default ConnectRouter;
