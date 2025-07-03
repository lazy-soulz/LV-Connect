import { Navigate, Outlet } from 'react-router-dom';

// TODO: Replace with real authentication logic or context
const isAuthenticated = true;

function PrivateRoute({ children }) {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children ? children : <Outlet />;
}

export default PrivateRoute; 