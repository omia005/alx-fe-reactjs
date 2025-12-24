import { Navigate } from "react-router-dom";


function useAuth() {
  // Simulate authentication status
  const isAuthenticated = true; // change to false to test redirect
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
