import { stringify } from "postcss";
import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";


export const CartContext = createContext()

export const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [])

    useEffect(()=>{

       if(cart){
        localStorage.setItem('cart', JSON.stringify(cart))
       }
    },[cart])

    const addToCart = (product) => {
        setCart((prev) => [...prev, { product, quantity: 1 }])
    }

    const updateCart = (id, type) => {
        setCart((prev) => prev.map((cart) => cart.product.id === id ? { ...cart, quantity: cart.quantity + type } : cart))
    }

    const deleteCart = (id) => {
        setCart(cart.filter((data) => data.product.id !== id))
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, updateCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}