import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { useNavigate } from "react-router-dom";
import { notify } from '../utils/notify';

const SignIn = () => {
  const navigate = useNavigate()
  const {handleLogin } = useAuthContext()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData)
  }

  const autoInput = () => {
    setFormData({username : "jj" , password : "123"})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <form onSubmit={handleSubmit} className="w-1/3 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
        <button onClick={autoInput} type="button" className="w-full bg-blue-500 text-white py-2 rounded-md mt-5">
          FakeUser
        </button>
      </form>
    </div>
  );
};

export default SignIn