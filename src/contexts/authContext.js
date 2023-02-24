import { createContext, useState } from 'react';
import { login } from '../services/authService'

export const AuthContext = createContext();

const initialState = {
    email: ``,
}

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState(initialState);

    const login = (email, password) => {
        setUser({
            email
        })
    }

    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated: Boolean(user.email) }}>
            {children}
        </AuthContext.Provider>
    )
}