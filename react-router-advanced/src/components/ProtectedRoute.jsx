import { Navigate } from "react-router-dom";

const isAuthenticated = true; // simulate login status

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
