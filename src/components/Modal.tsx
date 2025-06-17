import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="bg-indigo-900 rounded-lg shadow-lg p-6 w-96 h-120 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-sm w-6 h-6 flex items-center justify-center rounded-full bg-gray-600"
        >
          <AiOutlineClose />
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
            <div className="flex items-center border border-gray-300 rounded mb-4 bg-indigo-950">
              <FaUser className="text-gray-400 ml-2" />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 bg-indigo-950 w-full outline-none"
              />
            </div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded p-2 mb-4 w-full bg-indigo-950"
            />
            <button
              onClick={async (e) => {
                e.preventDefault();
                await login(email, password);
                onClose();
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
            >
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
                console.log("Hacer registro");
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
