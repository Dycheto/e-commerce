import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
    email: ``,
    localId: ``,
    refreshToken: ``,
    idToken: '',
    registered: Boolean(false)
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage(`user`, initialAuthState);

    const login = (authData) => {

        setUser(authData);

        console.log(user.email);
    }

    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated: Boolean(user.email) }}>
            {children}
        </AuthContext.Provider>
    )
}