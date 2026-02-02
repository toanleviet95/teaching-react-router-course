import { useAuth } from '@clerk/clerk-react';
import { Navigate, Outlet, useLocation } from 'react-router';

export default function ProtectedRoute() {
  const { isSignedIn, isLoaded } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <div className="flex justify-center items-center min-h-[50vh]">Loading...</div>;
  }

  if (!isSignedIn) {
    // Redirect to sign-in, preserving the intended destination
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
