import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ProductCard from "./ProductCard"
import NoDataFound from '../assets/no-data.gif'
import CartTotal from "./CartTotal"

const CartProducts = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className="flex justify-center">
            {cart.length ?
               <> 
               <div className="flex flex-wrap  w-9/12">  {cart.map((el, i) =><ProductCard key={i} data={el.product} />)}</div>
               <div className="mt-28"> <CartTotal cart={cart} /></div>
               </>
                : <img
                    src={NoDataFound}
                    className="h-80 mb-20 mt-5 object-cover border-8 border-pink-400"
                />
            }

        </div>
    )
}

export default CartProducts