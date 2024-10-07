import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectorCount } from "./slice"

function Counter() {
    const count = useSelector(selectorCount)
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        </>
    )
}

export default Counter