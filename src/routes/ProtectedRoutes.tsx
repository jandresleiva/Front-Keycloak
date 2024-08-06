import { ReactNode, useEffect } from 'react';
import useOidc from '../contexts/OidcContext/useOidc';

/***
 * ProtectedRoutes component
 * @description
 * This component is used to protect routes that require authentication and redirect to login page if user is not authenticated.
 * It uses the useAuth hook to get the authentication state.
 * @param children
 */
const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const { client: oidcClient, isLoading } = useOidc();

    useEffect(() => {
        if (!oidcClient) {
            console.error('Keycloak adapter is not initialized');
            throw new Error('Keycloak adapter is not initialized');
        }

        // If the user is not authenticated, redirect to login page
        if (!isLoading && !oidcClient.authenticated) {
            oidcClient.login({
                redirectUri: 'http://localhost:5173/'
            });
        }
    }, [oidcClient, oidcClient.authenticated, isLoading]);

    if (isLoading) {
        return <h1>Loading... </h1>;
    }

    return oidcClient.authenticated ? children : <h1>Loading... </h1>;
};

export default ProtectedRoutes;
