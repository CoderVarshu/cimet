import { Card } from "@material-tailwind/react"
import { useState } from "react"

const CartTotal = ({cart}) => {
   
    const [sum, setSum] = useState(0)
    console.log(cart)
    const total =()=>{
      let Total = cart.reduce((acc, el) => acc += el.product.price * el.quantity,0)
        return Total.toFixed(2)
    }

  return (
    <Card className="p-10">
      Total : ${total()}
    </Card>
  )
}

export default CartTotal