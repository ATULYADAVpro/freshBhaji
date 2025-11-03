import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


// --------- 1.create context ------
export const AppContext = createContext();

// ------------- 2.create a provider Component -----
export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [admin, setAdmin] = useState(null)

    const value = {navigate,user,setUser,admin,setAdmin}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

// -------- 3.Create a custom hook for convenience ------
export const useAppContext = () => {
    return useContext(AppContext)
}