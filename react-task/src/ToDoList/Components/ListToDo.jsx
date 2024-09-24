/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ListToDo = ({
  toDoArr,
  handleStatusChange,
  handleDelete,
  setSelectedToDo,
  setOpenModal,
  handleEdit,
  openModal,
}) => {
  const [updatedToDo, setUpdatedToDo] = useState("");

  return (
    <div>
      {toDoArr?.map((item) => (
        <div key={item.id}>
          {item.todo}
          <div>
            <input
              type="checkbox"
              value={item.completed}
              checked={item.completed}
              onChange={() => handleStatusChange(item.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDelete(item.id)}
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => {
                setUpdatedToDo(item.todo);
                setOpenModal(true);
                setSelectedToDo(item);
              }}
            />
          </div>
        </div>
      ))}

      {openModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Task</h3>
            <input
              type="text"
              value={updatedToDo}
              onChange={(e) => setUpdatedToDo(e.target.value)}
            />
            <button onClick={() => handleEdit(updatedToDo)}>Update</button>
            <button onClick={() => setOpenModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListToDo;
