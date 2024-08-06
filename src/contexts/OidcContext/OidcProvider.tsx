import { ReactNode, useState } from 'react';
import { OidcContext } from './OidcContext';
import Keycloak from 'keycloak-js';

interface OidcProviderProps {
    children: ReactNode;
}

const keycloakConfig = {
    url: 'http://localhost:8080/',
    realm: 'test-realm',
    clientId: 'react-client'
};

export const OidcProvider: React.FC<OidcProviderProps> = ({ children }) => {
    const [client] = useState(new Keycloak(keycloakConfig));
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialized, setIsInitialized] = useState(false);

    if (!isInitialized) {
        console.count('Initializing keycloak client on provider');
        void client.init({}).then(() => {
            console.log('Keycloak client initialized');
            setIsLoading(false);
            setIsInitialized(true);
        });
    }

    return (
        <OidcContext.Provider value={{ client, isLoading }}>
            {children}
        </OidcContext.Provider>
    );
};
