/* eslint-disable react/prop-types */
import { Card } from "@material-tailwind/react"
import { useContext, useEffect, useState } from "react"
import { currencyContext } from "../context/CurrencyConversContext"

const CartTotal = ({ cart }) => {

  const { currentCurr } = useContext(currencyContext)
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    console.log("CART", cart)
    if (cart) {
      total()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCurr, cart])

  const total = () => {
    let Total = cart.reduce((acc, el) => acc += el.product.price * el.quantity, 0)
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

    if (keys[0] === "INR") {
      setSymbol("₹")
    }
    else if (keys[0] === "AUD") {
      setSymbol("AU$")
    }
    else {
      setSymbol("$")
    }
  };
  const handleShowPrice = (price) => {
    let keys = Object.keys(currentCurr);

    if (keys[0] === 'USD') {
      return (price);

    } else {
      let convertedRate = (price * currentCurr[keys[0]]).toFixed(2);
      return (convertedRate);
    }
  };

  return (
    <Card className="p-10">
      <>
      <div className="flex justify-center font-black"> Total Orders </div>
        {cart.map((data) => {
            return (
              <div key={data.id} className="border-x-transparent border-b-2 p-2">
                <h3>  Title : {data.product.title}</h3>
                <h3>  Qty: {data.quantity}</h3>
                <h3>  Price : {symbol} {handleShowPrice(data.product.price)}</h3>
              </div>
            )})}
        Total : {symbol} {convertedPrice}
      </>
    </Card>
  )
}

export default CartTotal