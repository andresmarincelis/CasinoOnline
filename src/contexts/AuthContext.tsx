import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");

  async function login(email: string, password: string) {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      const token = response.data.accessToken;
      setAccessToken(token);
      setIsAuthenticated(true);
      localStorage.setItem("accessToken", token);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    setAccessToken("");
    setIsAuthenticated(false);
    localStorage.removeItem("accessToken");
  }

  // NO TOCAR
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setIsAuthenticated(false);
      setAccessToken("");
      return;
    }

    // Request al backend a authentication para validar si ese accessToken es valido o no
    const validateToken = async () => {
      try {
        await axios.get("http://localhost:3001/validate", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setAccessToken(accessToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        logout();
      }
    };
    validateToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, accessToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
