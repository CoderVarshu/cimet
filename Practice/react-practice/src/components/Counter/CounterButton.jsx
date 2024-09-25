import { useContext } from "react"
import { CounterContext } from "../../Context/CounterContext"
 const CounterButton = () => {

    const counterContext = useContext(CounterContext)


  return (
    <>
     <button
      onClick={()=> counterContext.setCount (counterContext.count +1)}
     className='increment-btn'>
        Increment
     </button>
     <button
     onClick={()=>
     {
        if(counterContext.count > 0)counterContext.setCount (counterContext.count -1)}
     }
        className='decrement-btn'>
        Decrement
     </button>
    </>
  )
}


export default CounterButton
