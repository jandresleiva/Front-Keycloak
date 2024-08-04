import { Navigate } from 'react-router-dom';
import useAuth from '../contexts/AuthContext/useAuth';

import { ReactNode } from 'react';

/***
 * ProtectedRoutes component
 * @description
 * This component is used to protect routes that require authentication and redirect to login page if user is not authenticated.
 * It uses the useAuth hook to get the authentication state.
 * @param children
 */
const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const { authState } = useAuth();

    return authState.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
