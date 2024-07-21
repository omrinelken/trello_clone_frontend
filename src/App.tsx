import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/authContext";
import AuthLayout from "./components/ui/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./components/ui/MainLayout";
import BusinessesPage from "./pages/BusinessesPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function AuthorizeAccess({ children }: { children: React.ReactNode }) {
  const { loggedInUser } = useAuth();
  if (loggedInUser === undefined) {
    return null;
  }

  if (loggedInUser === null) {
    return <Navigate to={"/auth/login"} />;
  }
  return children;
}

function UnauthorizedAccess({ children }: { children: React.ReactNode }) {
  const { loggedInUser } = useAuth();
  if (loggedInUser) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
      </Route>

      <Route
        path="/auth"
        element={
          <UnauthorizedAccess>
            <AuthLayout />
          </UnauthorizedAccess>
        }
      >
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
