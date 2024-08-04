import { ReactNode, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { type AuthContextState } from './Auth.types';
import { login as loginService } from '../../services/login';

interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider component to provide authentication state and methods
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthContextState>({
        isAuthenticated: false,
        user: null
    });

    // Optionally persist authentication state (e.g., in localStorage)
    useEffect(() => {
        const storedAuthState = localStorage.getItem('authState');
        if (storedAuthState) {
            setAuthState(JSON.parse(storedAuthState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(authState));
    }, [authState]);

    const login = async (
        username: string,
        password: string
    ): Promise<boolean> => {
        try {
            const loginServiceResult = await loginService(username, password);
            const user = { name: username }; // This should come from an API
            setAuthState({ isAuthenticated: true, user: user.name });
            return loginServiceResult;
        } catch (error) {
            // TODO: Remove
            console.log(password);
            console.error('Login failed:', error);
            setAuthState({ isAuthenticated: false, user: null });
            return false;
        }
    };

    const logout = () => {
        setAuthState({ isAuthenticated: false, user: null });
        localStorage.removeItem('authState');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
