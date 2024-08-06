import { useContext } from 'react';
import { OidcContext } from './OidcContext';
import { OidcContextProvider } from './OidcContextProvider.types';

const useOidc = (): OidcContextProvider => {
    const context = useContext(OidcContext);
    if (!context) {
        throw new Error('useOidc must be used within an OidcProvider');
    }
    return context;
};

export default useOidc;
