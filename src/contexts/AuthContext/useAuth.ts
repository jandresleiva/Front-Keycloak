import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthContextProvider } from './Auth.types';

const useAuth = (): AuthContextProvider => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default useAuth;
