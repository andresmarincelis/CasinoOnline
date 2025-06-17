import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export interface Wallet {
  balance: number;
}

interface WalletContextInterface {
  wallet: Wallet;
  addBalance: (amount: number) => void;
  removeBalance: (amount: number) => void;
}

export const WalletContext = createContext<WalletContextInterface>(
  {} as WalletContextInterface
);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<Wallet>({ balance: 0 });

  const addBalance = (amount: number) => {
    setWallet({ ...wallet, balance: wallet.balance + amount });
  };

  const removeBalance = (amount: number) => {
    setWallet({ ...wallet, balance: wallet.balance - amount });
  };

  async function getWallet() {
    try {
      const response = await axios.get('http://localhost:3005/balance', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJMUmtXRzZRTndyTW01Tmp1eSIsImVtYWlsIjoiZGllZ29jZXJkYWNlbGlzQGhvdG1haWwuY29tIiwiaWF0IjoxNzUwMTExNjIxLCJleHAiOjE3NTAxMTUyMjF9.lWolCvCW94sl_5f0llPB-kf0ElwnRwDFh_mLytLMLFI`,
        },
      });
      const data = response.data;
      setWallet({ balance: data.balance });
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, addBalance, removeBalance }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
