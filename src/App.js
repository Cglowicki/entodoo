import React, { useState } from 'react';
import './App.css';

//component imports
import Form from './components/Form';
import ToDoList from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

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
      />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
