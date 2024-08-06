import { ReactNode, useState } from 'react';
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

    const login = async (username: string): Promise<boolean> => {
        try {
            // I could potentially use the username + the token to get the user details from the API
            const loginServiceResult = await loginService(username);
            const user = { name: username }; // This should come from an API
            setAuthState({ isAuthenticated: true, user: user.name });
            return loginServiceResult;
        } catch (error) {
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
