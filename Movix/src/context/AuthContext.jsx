import { useState } from "react"
import { createContext } from "react"
export const authContext=createContext()

export default function AuthContext({children}){
    let [auth,setAuth]=useState(false)
    console.log("check",auth)
    return(
       < authContext.Provider value={{auth,setAuth}}>
        
        {children}
        </authContext.Provider>
    )
}