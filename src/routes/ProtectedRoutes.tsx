import { ReactNode, useEffect } from 'react';
import useOidc from '../useOidc';

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
        console.count('ProtectedRoutes rendered');
        if (!oidcClient) {
            console.error('Keycloak adapter is not initialized');
            throw new Error('Keycloak adapter is not initialized');
        }

        if (!oidcClient.authenticated) {
            console.log('Oidc', oidcClient);
            if (!oidcClient) {
                console.error('Keycloak adapter is not initialized');
            } else {
                oidcClient.login({
                    redirectUri: 'http://localhost:5173/test'
                });
            }
        } else {
            console.log('User is authenticated');
        }
    }, [oidcClient, oidcClient.authenticated, isLoading]);

    return oidcClient.authenticated ? children : <h1>Not authenticated</h1>;
};

export default ProtectedRoutes;
