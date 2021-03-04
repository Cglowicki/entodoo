import React, { useState, useEffect } from 'react';
import './App.css';

//component imports
import Form from './components/Form';
import ToDoList from './components/ToDoList'

function App() {
  //useState
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);

  //useEffect
  useEffect(() => {
    filterHandler()
  }, [toDos, status]);

  //filter function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  return (
    <div className="App">
      <h1>entodoo</h1>
      <header>
        <h1>Fight Boredom!</h1>
      </header>
      <Form
        inputText={inputText}
        todos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
