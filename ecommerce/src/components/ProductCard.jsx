import { Card } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ data }) => {

    const { cart, addToCart, updateCart, deleteCart } = useContext(CartContext);
    const [isExistProduct, setIsExistProduct] = useState(null)

    useEffect(() => {
        let product = cart.find(item => item.product.id === data.id)
        if (product) setIsExistProduct(product)
        else   setIsExistProduct(null)

    }, [cart])

    const textLimit=(data)=> data.split(' ').slice(0,5).join(' ')

    return (
        <div>
            <Card className='w-60 h-80 flex flex-col px-10 bg-transparent m-5'>
                <div>
                    <img
                        src={data.image}
                        alt='Product Image'
                        className='h-40 w-40'
                    />
                </div>
                <div className='w-full flex justify-center text-center'>
                    {textLimit(data.title)}
                </div>
                <div className='w-full flex justify-center'>
                    ${data.price}
                </div>
                <div className='w-full flex justify-center'>
                    {!isExistProduct ? <button className='bg-blue-gray-500 mb-2 mt-2 absolute bottom-2 p-2 rounded-md text-white'
                        onClick={() => addToCart(data)}
                    >
                        Add To Cart
                    </button> :
                        <div className='flex bg-blue-gray-500 px-5 py-2 rounded text-white absolute bottom-2 mb-2 '>
                            <button className='mr-4' onClick={() => isExistProduct.quantity > 1 ? updateCart(data.id, -1)
                                : deleteCart(data.id)}>-</button>
                            <p>{isExistProduct.quantity}</p>
                            <button className='ml-4' onClick={() => updateCart(data.id, 1)} >+</button>
                        </div>}
                </div>
            </Card>
        </div>
    )
}

export default ProductCard