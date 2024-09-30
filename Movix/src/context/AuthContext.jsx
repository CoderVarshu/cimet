import { useContext, useState } from "react"
import { createContext } from "react"

const AuthContext = createContext(null);

export default function AuthProvider({children}){
    let [auth,setAuth]=useState("hello")
    console.log("check",auth)
    return(
       < AuthContext.Provider value={{auth,setAuth}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
