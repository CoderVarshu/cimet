import { useEffect, useState } from "react";


const ToDoForm  = ({ handleAddToDO, selectedToDo, handleClear }) => {

    const [inputToDo, setInputToDo] = useState("");

    useEffect(() => {}, [selectedToDo]);

  return (
    <form action="">
         <div className="input-container">
      <input
        placeholder="Enter To Do"
        className="input"
        value={inputToDo}
        onChange={(e) => setInputToDo(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => {
          handleAddToDO(inputToDo);
          setInputToDo("");
        }}
      >
        Add
      </button>
      <button
       onClick={handleClear}
      className="clear-btn">
        Clear All
       </button>
    </div>
    
    </form>
  )
}

export default ToDoForm