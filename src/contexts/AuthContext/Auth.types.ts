export interface AuthContextState {
    isAuthenticated: boolean;
    user: string | null;
}

export interface AuthContextProvider {
    children?: React.ReactNode;
    authState: AuthContextState;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    //setAuthState: React.Dispatch<React.SetStateAction<AuthContextState>>;
}
