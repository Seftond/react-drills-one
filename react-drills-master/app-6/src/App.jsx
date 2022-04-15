import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  let list = tasks.map((element, index) => {
          return (<Todo key={index} task={element}/>)
  });
  function updateTasks(tasks, input){
    let newArr = [];
    newArr = [...tasks, input]
    setTasks(newArr);
  }

  return (
    <div>
      <h1>To-Do List:</h1>
      <input type='text' placeholder='task' onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => updateTasks(tasks, input)}>Add Item</button>
      {list}

    </div>
  );
}

export default App;

