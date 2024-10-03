/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const cartContext = createContext();


export default function CartProvider ({children}){

    const [cart, setCart] = useState([])

    const updateCart =(product) =>{
      setCart([...cart, {product, quantity:1}])
    }

    const handleQuantity =(id, type)=>{
          
        setCart((prevCart)=> prevCart.map((cart)=>{
            return(
                cart.product.id === id ?(
                    {...cart, quantity: type === 'inc' ? cart.quantity + 1 : cart.quantity - 1 }

                ) : cart
            )
        }))
    }

    const deleteProduct=(id)=>{
       setCart(cart.filter((product)=> product.id !== id))
    }

 return(

    <cartContext.Provider value={{cart, updateCart, handleQuantity, deleteProduct}}>
    {children}
  </cartContext.Provider>
 )
}