import { Grid, Typography } from '@mui/material';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.data || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message + ' ' + error.stack?.toString();
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            style={{
                backgroundColor: '#151110',
                width: '100vw',
                height: '100vh',
                margin: '0',
                padding: '0'
            }}
        >
            <Grid item xs={8}>
                <Typography component="h1" variant="h1" color="#f6f6f6">
                    An error occurred
                </Typography>
                <Typography component="p" color="#f6f6f6">
                    {errorMessage}
                </Typography>
            </Grid>
        </Grid>
    );
};
