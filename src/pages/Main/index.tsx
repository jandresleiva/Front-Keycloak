/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Paper } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext/useAuth';
import useOidc from '../../contexts/OidcContext/useOidc';
import { useEffect } from 'react';

const MainStyle = {
    css: css`
        padding: 20px;
    `
};

export const Main = () => {
    const navigate = useNavigate();
    // Main is a layout under Protected Routes, it will only render if the user is authenticated
    const { client } = useOidc();
    const { login, authState } = useAuth();

    const hydrateUser = async () => {
        if (client?.authenticated && !authState.isAuthenticated) {
            try {
                await client.loadUserProfile();
                login(client.profile?.username ?? '');
            } catch (error) {
                console.error('Failed to load user profile:', error);
            }
        }
    };
    useEffect(() => {
        hydrateUser();
    }, []);

    return (
        <Paper elevation={1} css={MainStyle.css}>
            <Button
                sx={{ mt: 3, mb: 2, ml: 2 }}
                onClick={() => navigate('profile')}
                variant="contained"
            >
                Profile
            </Button>
            <Button
                sx={{ mt: 3, mb: 2, ml: 2 }}
                onClick={() => navigate('users')}
                variant="contained"
            >
                Users
            </Button>
            <Button
                sx={{ mt: 3, mb: 2, ml: 2 }}
                onClick={() => navigate('clients')}
                variant="contained"
            >
                Clients
            </Button>
            <Button
                sx={{ mt: 3, mb: 2, ml: 2 }}
                onClick={() => navigate('test')}
                variant="contained"
            >
                Test
            </Button>
            <Outlet />
        </Paper>
    );
};
