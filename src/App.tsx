import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext/AuthProvider';
import { routesConfig } from './routes';
import { OidcProvider } from './OidcProvider';

function App() {
    const getCurrentTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <>
            <OidcProvider>
                <AuthProvider>
                    <ThemeProvider
                        theme={getCurrentTheme() ? darkTheme : lightTheme}
                    >
                        <AuthBasedRouter />
                    </ThemeProvider>
                </AuthProvider>
            </OidcProvider>
        </>
    );
}

const AuthBasedRouter = () => {
    // Create router with up-to-date auth state
    const router = createBrowserRouter(routesConfig());

    return <RouterProvider router={router} />;
};

export default App;
