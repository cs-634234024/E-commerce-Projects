import React, { useState } from "react";
import { createContext } from "react";
import { notify } from "../../utils/notify";
import { Navigate } from "react-router-dom";
import axios from "axios";
export const AuthContext = createContext();
import { useNavigate } from "react-router-dom";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth , setAuth] = useState()
  const [tokenCheck , setTokenCheck] = useState(false)
  const [userinfo , setUserInfo] = useState(localStorage.getItem("userinfo")? localStorage.getItem("userinfo") : null)
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleSignUp = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/user", {
        username: data.username,
        password: data.confirmPassword,
        email: data.email,
        fname: data.fname,
        lname: data.lname,
        address: data.address,
      });
      if (res.data.status === "Error") {
        notify("error", res.data.message);
      }
      if (res.data.status === "ok") {
        notify("success", res.data.message);
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (err) {
      notify("error", "have some error");
    }
  };
  const handleLogin = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username: data.username,
        password: data.password,
      });
      if (res.data.status === "Error") {
        notify("error", res.data.message);
      }
      if (res.data.status === "ok") {
        const token = res.data.token;
        setToken(token)
        setTokenCheck(true)
        localStorage.setItem("token", token);
        const headers = {
          Authorization: `bearer ${token}`,
        };
        Authentication(headers);
      }
    } catch (err) {
      notify("error", "have some error");
    }
  };

  const Authentication = async(headers) => {
    try {
      const auth = await axios.get("http://localhost:3000/api/auth", {
        headers,
      });
      console.log(auth.data);
      if (auth.data.status === "ok") {
        notify("success", "login success!");
        console.log(auth.data);
        localStorage.setItem("userinfo" , auth.data.decode.username)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }else {
        notify("error", "login failed!");
      }
    } catch (err) {
      notify("error", "have some error");
    }
  }

  const handleLogout = () => {
    notify("success", "Logout Successfully")
    setTimeout(() => {
      localStorage.removeItem("token")
      localStorage.removeItem("userinfo")
      setToken(null)
      
    }, 500);
  }

  return (
    <AuthContext.Provider
      value={{ token, handleSignUp, handleLogin, userinfo , handleLogout , tokenCheck}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
