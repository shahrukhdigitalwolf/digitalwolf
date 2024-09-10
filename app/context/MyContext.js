'use client'
import { useContext, useState, createContext } from "react"

const MyContext = createContext()

export function ContextProvider({children}){
    const [popup, openPopup] = useState(false)
    
    return(
        <MyContext.Provider value={{popup, openPopup}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext);