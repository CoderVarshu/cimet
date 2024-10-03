import { useState } from 'react'

import Router from './routes/AllRoutes'
import { ContextProvider } from './context/CartContext'

function App() {

  return (
    <>
    <ContextProvider>
     <Router />
     </ContextProvider>
    </>
  )
}

export default App
