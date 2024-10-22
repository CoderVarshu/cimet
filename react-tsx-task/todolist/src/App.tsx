
import { useEffect, useState } from 'react';
import ListToDo from './components/ListToDo'
import ToDoForm from './components/ToDoForm'

function App() {

  interface ToDo {
    id: number;
    todo: string;
    completed: boolean,
  }

  const [toDoArr, setToDoArr] = useState<ToDo[]>(() => {
    const stored = localStorage.getItem("todo")
    return stored ? JSON.parse(stored) : []

  }
  );

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(toDoArr));
  }, [toDoArr]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedToDo, setSelectedToDo] = useState({});


  const handleAddToDO = (name: string) => {
    const toDoObj = {
      id: Date.now(),
      todo: name,
      completed: false,
    };

    setToDoArr((prev): ToDo[] => {
      const newToDoArr = [...prev, toDoObj];
      localStorage.setItem("todo", JSON.stringify(newToDoArr));
      return newToDoArr;
    });
  };

  const handleDelete = (id: number) => {
    const updatedToDo = toDoArr.filter((data) => data.id !== id);
    setToDoArr(updatedToDo);
    localStorage.setItem("todo", JSON.stringify(updatedToDo));
  };

  const handleUpdate = (id: number, name: string) => {
    const updatedToDo = toDoArr.forEach((data) => {
      if (data.id === id) {
        return {
          ...data,
          todo: name,
        };
      }
      return data
    });
    setToDoArr(updatedToDo);
  };

  const handleStatusChange = (id: number) => {
    const updatedToDos = toDoArr.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          completed: !data.completed,
        };
      }
    });
    setToDoArr(updatedToDos)
    localStorage.setItem('todo', JSON.stringify(updatedToDos));
  };

  const handleEdit = (updatedToDo: ToDo) => {
    const updatedToDos = toDoArr.map((item) =>
      item.id === selectedToDo.id ? { ...item, todo: updatedToDo } : item
    )

    setToDoArr(updatedToDos)
    localStorage.setItem("todo", JSON.stringify(updatedToDos))

    setOpenModal(false);
    setSelectedToDo({});
  };

  const handleClear = () => {
    setToDoArr([])
    localStorage.clear()
  }


  return (
    <>
      <ToDoForm
        selectedToDo={selectedToDo}
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
  )
}

export default App
