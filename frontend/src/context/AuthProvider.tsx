import React, { createContext, ReactElement, useState } from 'react';

interface IAuthContext {
    auth: string,
    setAuth?: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<Partial<IAuthContext>>({
    auth: ''
});

interface InputWrapperProps extends React.ReactElement {
    children: React.ReactNode | ReactElement
}


export const AuthProvider: React.FC<InputWrapperProps> = ({ children }) => {
    const [auth, setAuth] = useState('');

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;