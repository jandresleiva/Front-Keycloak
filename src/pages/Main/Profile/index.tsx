import { Box, Grid, Typography } from '@mui/material';
import useAuth from '../../../contexts/AuthContext/useAuth';

export const Profile = () => {
    const { authState } = useAuth();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ mt: 3, mb: 2, ml: 2 }}>
                    <Typography component="h3" variant="h3">
                        Profile page
                    </Typography>
                </Box>
                <Box sx={{ mt: 3, mb: 2, ml: 2 }}>
                    <Typography component="p">
                        User name: {authState.user}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
