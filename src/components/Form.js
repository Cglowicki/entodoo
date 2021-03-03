import React from 'react';

export default function Form({ setInputText }){
  //updates input state text
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};