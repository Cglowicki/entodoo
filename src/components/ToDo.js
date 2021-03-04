import React from 'react';

export default function ToDo({ text, toDo, toDos, setToDos }) {
  //events
  const deleteHandler = () => {
    setToDos(toDos.filter(element => element.id !== toDo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
};