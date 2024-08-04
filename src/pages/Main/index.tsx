/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Paper } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const MainStyle = {
    css: css`
        padding: 20px;
    `
};

export const Main = () => {
    const navigate = useNavigate();

    return (
        <Paper elevation={1} css={MainStyle.css}>
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
            <Outlet />
        </Paper>
    );
};
