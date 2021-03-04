import React from 'react';

export default function ToDo({ text, toDo, toDos, setToDos }) {
  //events
  const deleteHandler = () => {
    setToDos(toDos.filter(item => item.id !== toDo.id));
  };

  const completeHandler = () => {
    setToDos(toDos.map((item) => {
      if (item.id === toDo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${toDo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
};