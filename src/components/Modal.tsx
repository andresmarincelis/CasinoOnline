import axios from "axios";
import React, { useState } from "react";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [accessToken, setAccessToken] = useState("");

  const login = async () => {
    const response = await axios.post(
      "http://localhost:3001/login",
      {
        email: "andresmarincelis@gmail.com",
        password: "123456",
      },
      { headers: { "Content-Type": "application/json" } }
    );
    const data = response.data;
    setAccessToken(data.accessToken);
    console.log(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="bg-indigo-900 rounded-lg shadow-lg p-6 w-96 h-120 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-sm w-4 h-4 flex items-center justify-center rounded-full bg-gray-600"
        >
          X
        </button>
        <div className="flex items-center justify-center my-12">
          <button
            className={`py-2 px-4 rounded ${
              isLogin ? "bg-blue-500 text-white" : "bg-indigo-950"
            } hover:bg-blue-500`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={`py-2 px-4 rounded ${
              !isLogin ? "bg-green-500 text-white" : "bg-indigo-950"
            } hover:bg-green-500`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <form>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
              Sign In
            </button>
          </form>
        ) : (
          <form>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <input
              type="password"
              placeholder="Repeat Password"
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
              className="bg-green-500 text-white py-2 px-4 rounded w-full"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
