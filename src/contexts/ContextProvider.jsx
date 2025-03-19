import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    Token: null,
    setUser: () => { },
    setToken: () => { },
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name : 'Ken',
    });
    const [token, _setToken] = useState(123);

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCES_TOKEN', token);
        }
        else{
            localStorage.removeItem('ACCES_TOKEN');
        }
    }

    return( 
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);