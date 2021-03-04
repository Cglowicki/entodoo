import React from 'react';

//component imports
import ToDo from './ToDo'

export default function ToDoList({ toDos, setToDos }) {
  //console.log(toDos);
  //map through array in <ul></ul> to render toDos
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDos.map(toDo => (
          <ToDo
            toDos={toDos}
            toDo={toDo}
            setToDos={setToDos}
            key={toDo.id}
            text={toDo.text}
          />
        ))}
      </ul>
    </div>
  );
};