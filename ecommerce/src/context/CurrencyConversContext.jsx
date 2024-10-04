/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const currencyContext = createContext();

export default function CurrencyContextProvider({ children }) {
  // localStorage.getItem('currency') ? JSON.parse(localStorage.getItem('currency')):
  const [currency, setCurrency] = useState({});
  const [currentCurr, setCurrentCurr] = useState({ USD: 1 });


  const handleSetCurrency = (curr) => {
    if (currency[curr]) setCurrentCurr({ [curr]: currency[curr] });
    else setCurrentCurr({ USD: 1 });
  };

  const convertCurrency = (cur) => {
    setCurrency(cur);
  };

  return (
    <currencyContext.Provider
      value={{
        currency,
        currentCurr,
        convertCurrency,
        handleSetCurrency,
      }}
    >
      {children}
    </currencyContext.Provider>
  );
}
