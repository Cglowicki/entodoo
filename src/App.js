import React, { useState } from 'react';
import './App.css';

//component imports
import Form from './components/Form';
import ToDo from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>entodoo</h1>
      <header>
        <h1>Fight Boredom!</h1>
      </header>
      <Form setInputText={setInputText} />
      <ToDo inputText={inputText} />
    </div>
  );
}

export default App;
