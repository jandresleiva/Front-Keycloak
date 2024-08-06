import { createContext } from 'react';
import { type AuthContextProvider } from './Auth.types';

// TODO: Rename the context to be more representative of the User
export const AuthContext = createContext<AuthContextProvider | undefined>(
    undefined
);
