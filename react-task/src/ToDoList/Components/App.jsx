import { useState } from "react";
import AddToDo from "./AddToDo";
import ListToDo from "./ListToDo";

const ToDoApp = () => {
  const [toDoArr, setToDoArr] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  const [openModal, setOpenModal] = useState(false);
  const [selectedToDo, setSelectedToDo] = useState({});


  const handleAddToDO = (name) => {
    const toDoObj = {
      id: Date.now(),
      todo: name,
      completed: false,
    };

    setToDoArr((prev) => {
      const newToDoArr = [...prev, toDoObj];
      localStorage.setItem("todo", JSON.stringify(newToDoArr));
      return newToDoArr;
    });
  };

  const handleDelete = (id) => {
    const updatedToDo = toDoArr.filter((data) => data.id !== id);
    setToDoArr(updatedToDo);
    localStorage.setItem("todo", JSON.stringify(updatedToDo));
  };

  const handleUpdate = (id, name) => {
    const updatedToDo = toDoArr.forEach((data) => {
      if (data.id === id) {
        return {
          ...data,
          todo: name,
        };
      }
    });
    setToDoArr(updatedToDo);
  };

  const handleStatusChange = (id) => {
    const updatedToDos = toDoArr.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          completed: !data.completed,
        };
      }
    });
    setToDoArr(updatedToDos);
    localStorage.setItem('todo', JSON.stringify(updatedToDos));
  };

  const handleEdit = (updatedToDo) => {
       const updatedToDos = toDoArr.map((item)=>
          item.id === selectedToDo.id ? { ...item , todo: updatedToDo } : item
    )

    setToDoArr(updatedToDos)
     localStorage.setItem("todo", JSON.stringify(updatedToDos))

     setOpenModal(false);
     setSelectedToDo(null);
  };

  const handleClear=()=>{
    setToDoArr([])
    localStorage.clear()
  }

  return (
    <>
      <AddToDo 
       handleClear={handleClear}
      handleAddToDO={handleAddToDO} />
      <ListToDo
        handleUpdate={handleUpdate}
        toDoArr={toDoArr}
        handleDelete={handleDelete}
        handleStatusChange={handleStatusChange}
        handleEdit={handleEdit}
        setOpenModal={setOpenModal}
        openModal={openModal}
        setSelectedToDo={setSelectedToDo}
      />
    </>
  );
};

export default ToDoApp;
