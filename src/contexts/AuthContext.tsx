import axios from 'axios';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextInterface {
  isAuthenticated: boolean;
  accessToken: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');

  async function login(email: string, password: string) {
    try {
      const url = 'http://localhost:3001';
      const response = await axios.post(
        `${url}/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const data = response.data;
      console.log(data);
      setAccessToken(data.accessToken);
      setAuthenticated(true);
    } catch (error: any) {
      console.log(error);
    }
  }

  function logout() {
    setAccessToken('');
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, accessToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
