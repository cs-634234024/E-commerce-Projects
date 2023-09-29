import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../contexts";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const { handleSignUp  } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    fname: "",
    lname: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
     handleSignUp(formData);
  };


  const autoInput = () => {
    setFormData({
      username: "haris",
      password: "123123",
      confirmPassword: "123123",
      email: "haris@gmial.com",
      fname: "haris",
      lname: "sadeen",
      address: "thailand",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 p-6 bg-white shadow-md rounded-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Sign Up
        </button>
        
        <button
        type="button"
        onClick={autoInput}
          className="w-full bg-yellow-500 text-white py-2 rounded-md mt-5"
        >
          FakeUser
        </button>
        
      </form>
    </div>
  );
};

export default SignUp;
