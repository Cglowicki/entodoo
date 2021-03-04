import React from 'react';

export default function Form({ setInputText, todos, setToDos, inputText }){
  //updates input state text
  const inputTextHandler = (event) => {
    //console.log(event.target.value);
    setInputText(event.target.value);
  };
  
  const submitToDoHandler = (event) => {
    event.preventDefault();
    setToDos([
      ...todos, {
        text: inputText, 
        completed: false,
        id: Math.random() * 1000
      }
    ]);
    setInputText("");
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
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