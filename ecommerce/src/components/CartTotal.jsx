/* eslint-disable react/prop-types */
import { Card } from "@material-tailwind/react"
import { useContext, useEffect, useState } from "react"
import { currencyContext } from "../context/CurrencyConversContext"

const CartTotal = ({cart}) => {

   const {currentCurr} = useContext(currencyContext)
   const [convertedPrice, setConvertedPrice] = useState(0);
   const [symbol, setSymbol] = useState("$");
   
   useEffect(()=>{
       if(cart){
        total()
       }
   }, [currentCurr])
   
    const total =()=>{
      let Total = cart.reduce((acc, el) => acc += el.product.price * el.quantity,0)
        handlePrice(Total.toFixed(2))
    }

    const handlePrice = (price) => {
      let keys = Object.keys(currentCurr);
    if (keys[0] === 'USD') {
      setConvertedPrice(price);
    } else {
        let convertedRate = (price * currentCurr[keys[0]]).toFixed(2);
        setConvertedPrice(convertedRate);
    }
  
    if (keys[0] === "INR") setSymbol("₹");
    else if (keys[0] === "AUD") setSymbol("AU$");
    else setSymbol("$");
  };


  return (
    <Card className="p-10">
      Total : {symbol} {convertedPrice}
    </Card>
  )
}

export default CartTotal