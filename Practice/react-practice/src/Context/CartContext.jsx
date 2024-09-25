import React, { createContext, useState } from 'react'

const CartContextProvider = () => {

    const CartContext = createContext(null)
    const [items, setItems]  = useState([])
  return (
    <div>
        <CartContext.Provider value={{items, setItems}}>
            {prop.children}
        </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider