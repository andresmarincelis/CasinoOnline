import axios from "axios";
import React, { useState } from "react";

interface BetAmountProps {
  total: number;
  onPlaceBet: () => void;
}

const BetAmount: React.FC<BetAmountProps> = ({ total, onPlaceBet }) => {
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

  const start = async () => {
    const response = await axios.get(
      "http://localhost:3002/blackjack/start?amount=2000",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const data = response.data;
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-blue-900 text-white px-4 py-2 rounded flex justify-between">
        <span>🪙</span>
        <span>{total}</span>
      </div>
      <button
        onClick={login}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      <button
        onClick={start}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Start
      </button>
    </div>
  );
};

export default BetAmount;
