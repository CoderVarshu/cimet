import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { fetchCurrencyConversion } from '../services/Api'

const Header = () => {

    const getCurrency =async()=>{
        const response = await fetchCurrencyConversion()
        console.log("first", response)
    }

    useEffect(()=>{
       getCurrency()
    }, [])
 
    const {cart} = useContext(CartContext)

    return (
        <header>
            <nav className='flex justify-between bg-gray-800 text-white font-bold px-5 py-4 mb-0'>
                <div>
                    <h1>
                        <NavLink to='/'>
                            Ecommerce
                        </NavLink>
                    </h1>
                </div>
                <ul className='list-none flex gap-5'>
                    <li>
                        <NavLink to='/products'>
                            Products
                        </NavLink>
                    </li>
                    <li>
                       <select>
                        </select> 
                    </li>
                    <li>
                    <NavLink to='/cart'>
                           Cart {cart.length > 0 && `(${cart.length})`}
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/blog'>
                            Blogs
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header