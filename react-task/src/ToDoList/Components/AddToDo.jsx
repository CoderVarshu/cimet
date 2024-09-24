/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const AddToDo = ({ handleAddToDO, selectedToDo, handleClear }) => {
  const [inputToDo, setInputToDo] = useState("");

  useEffect(() => {}, [selectedToDo]);

  return (
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
  );
};

export default AddToDo;
