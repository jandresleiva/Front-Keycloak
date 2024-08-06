export interface AuthContextState {
    isAuthenticated: boolean;
    user: string | null;
}

export interface AuthContextProvider {
    children?: React.ReactNode;
    authState: AuthContextState;
    login: (user: string) => Promise<boolean>;
    logout: () => void;
    //setAuthState: React.Dispatch<React.SetStateAction<AuthContextState>>;
}
