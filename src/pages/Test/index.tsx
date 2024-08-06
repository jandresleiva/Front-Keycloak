import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { KeycloakProfile } from 'keycloak-js';
import { useNavigate } from 'react-router-dom';
import useOidc from '../../contexts/OidcContext/useOidc';

/***
 * This page will show the status of the user authentication.
 * It should not be used in production, it is only for testing purposes.
 */
export const Test = () => {
    const { client, isLoading } = useOidc();
    const [profile, setProfile] = useState<KeycloakProfile | undefined>(
        undefined
    );
    const navigate = useNavigate();

    useEffect(() => {
        console.count('test page rendered');
        const hydrateUser = async () => {
            if (client?.authenticated) {
                try {
                    await client.loadUserProfile();
                    setProfile(client.profile);
                } catch (error) {
                    console.error('Failed to load user profile:', error);
                }
            }
        };

        if (!isLoading) {
            void hydrateUser();
        }
    }, [client, isLoading]);

    return (
        <>
            <h1>Test page</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <>
                    <p>
                        {client?.authenticated
                            ? 'is authenticated'
                            : 'is not authenticated'}
                    </p>
                    <p>mail: {profile?.email}</p>
                    <p>first name: {profile?.firstName}</p>
                    <p>last name: {profile?.lastName}</p>
                    <p>username: {profile?.username}</p>
                    <p>token: {client?.token}</p>
                    <p>
                        role:{' '}
                        {client?.hasRealmRole('administrator')
                            ? 'admin'
                            : 'user'}
                    </p>
                </>
            )}
            <Button
                sx={{ mt: 3, mb: 2, ml: 2 }}
                onClick={() => navigate('clients')}
                variant="contained"
            >
                Clients
            </Button>
        </>
    );
};
