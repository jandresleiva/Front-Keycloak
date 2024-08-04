import { createContext } from 'react';
import { type AuthContextProvider } from './Auth.types';

export const AuthContext = createContext<AuthContextProvider | undefined>(
    undefined
);
