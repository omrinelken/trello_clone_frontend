import { useToast } from "@/components/ui/use-toast";
import api from "@/lib/api";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser, RegisterUser, User } from "../types/userTypes";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextType {
  loggedInUser: User | null | undefined;
  login: (user: LoginUser) => void;
  register: (user: RegisterUser) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useLocalStorage("jwt-taskify", null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!token) {
      setLoggedInUser(null);
      return;
    }

    async function fetchUser() {
      try {
        const response = await api.get("/auth/user");
        setLoggedInUser(response.data);
      } catch (error: any) {
        if (error.response?.status === 401) {
          toast({
            title: "Invalid session!",
            description: "Your session is invalid, logging you out...",
            variant: "error",
          });
          logout();
        } else if (error.response?.status === 404) {
          toast({
            title: "Invalid session!",
            description: "Your session is invalid, logging you out...",
            variant: "error",
          });
          logout();
        } else {
          toast({
            title: "Oops! something went wrong",
            description: error.message,
            variant: "error",
          });
        }
      }
    }

    fetchUser();
  }, [token]);

  function logout() {
    setToken(null);
    setLoggedInUser(null);
    navigate("/");
  }

  async function login(userData: LoginUser) {
    try {
      setLoading(true);
      const response = await api.post("/auth/login", userData);
      setToken(response.data.token);
      toast({
        title: "Logged in succesfully",
        description: `Welcome to Taskly`,
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Unauthorized access!",
        description:
          "Either the username or the password you have entered are incorrect! Try again",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  async function register(userData: RegisterUser) {
    try {
      setLoading(true);
      await api.post("/auth/register", userData);
      toast({
        title: "Registered succesfully",
        description: `Thank you for registering!`,
        variant: "success",
      });
      navigate("/auth/login");
    } catch (error) {
      toast({
        title: "User already exists",
        description: "The user you are trying to create already exists! ",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ loggedInUser, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}
