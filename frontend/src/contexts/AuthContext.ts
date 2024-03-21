import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface User {
  email: string;
  password: string;
  // Add any other user properties here
}

interface AuthContextType {
  currentUser: User | null;
  error: string;
  setError: (error: string) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function register(email: string, password: string) {
    try {
      const response = await axios.post("/register", { email, password });
      setCurrentUser(response.data.user); // Update the currentUser state with the user data received from the server
    } catch (error: any) {
      setError(error.response.data.message);
    }
  }

  async function login(email: string, password: string) {
    try {
      const response = await axios.post("/login", { email, password });
      setCurrentUser(response.data.user); // Update the currentUser state with the user data received from the server
    } catch (error: any) {
      setError(error.response.data.message);
    }
  }

  async function logout() {
    try {
      await axios.post("/logout"); // Make an API call to log out the user
      setCurrentUser(null); // Reset the currentUser state to null
    } catch (error: any) {
      setError(error.response.data.message);
    }
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  const value: AuthContextType = {
    currentUser,
    error,
    setError,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}