import Keycloak from 'keycloak-js';

export interface OidcContextProvider {
    client: Keycloak;
    isLoading: boolean;
}
