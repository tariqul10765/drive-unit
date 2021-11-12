import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase()
    return (
        <div>
            <authContext.Provider value={allContext}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;