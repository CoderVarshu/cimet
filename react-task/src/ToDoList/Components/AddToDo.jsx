/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const AddToDo = ({handleAddToDO, selectedToDo}) => {
 
    const [inputToDo, setInputToDo] = useState('')

    useEffect(()=>{
        
    },[selectedToDo])

  return (
    <div>
        <input placeholder="Enter To Do" 
            className="input"
            value={inputToDo} 
          onChange={(e)=>setInputToDo(e.target.value)}
        />
        <button onClick={()=>{
            handleAddToDO(inputToDo)
                setInputToDo('')}}>
            Add
        </button>
        </div>
  )
}

export default AddToDo