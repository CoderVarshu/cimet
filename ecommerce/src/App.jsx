import { useState } from 'react'

import Router from './routes/AllRoutes'
import { ContextProvider } from './context/CartContext'
import CurrencyContextProvider from './context/CurrencyConversContext'

function App() {

  return (
    <>
    <ContextProvider>
    <CurrencyContextProvider>
     <Router />
     </CurrencyContextProvider>
     </ContextProvider>
    </>
  )
}

export default App
