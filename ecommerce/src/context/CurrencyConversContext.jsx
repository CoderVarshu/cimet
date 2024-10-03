import { createContext, useState } from "react";


export const createCurrencyContext = createContext()

export default function CurrencyContextProvider({ children }) {

    const [currency, setCurrency] = useState([])

    const convertCurrency = (cur) => {

        setCurrency(cur)
    }

    const getConvertedCurrency = () => {
        return (
            <>HII</>
        )
    }

    return (
        <createCurrencyContext.Provider value={{ currency, convertCurrency, getConvertedCurrency }}>
              {children}
        </createCurrencyContext.Provider>
    )
}