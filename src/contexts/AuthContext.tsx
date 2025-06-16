import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

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
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  async function login() {}

  function logout() {}

  // NO TOCAR
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setIsAuthenticated(false);
      setAccessToken('');
      return;
    }

    // Request al backend a authentication para validar si ese accessToken es valido o no
    // Token es valido
    setAccessToken(accessToken);
    setIsAuthenticated(true);
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
