import CounterButton from "./CounterButton"
import { CounterContext } from "../../Context/CounterContext"
import { useContext } from "react"

const Counter = () => {

    const counterState = useContext(CounterContext)
       console.log("Counter", counterState)

    return (
    <div>
        <h1>
            Count is {counterState.count}
        </h1>
         <CounterButton />
    </div>
  )
}

export default Counter