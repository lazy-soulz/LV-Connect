import { Navigate, Outlet } from 'react-router-dom';

// TODO: Replace with real authentication logic or context
const isAuthenticated = false;

function PublicRoute({ children }) {
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return children ? children : <Outlet />;
}

export default PublicRoute; 