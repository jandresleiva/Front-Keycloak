import { createContext } from 'react';
import { OidcContextProvider } from './OidcContextProvider.types';

export const OidcContext = createContext<OidcContextProvider | undefined>(
    undefined
);
