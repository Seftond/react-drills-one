import React, { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';

function App() {
  const [list, setList] = useState([])
  function updateList(input){
    let newArr = [];
    newArr = [...list, input];
    setList(newArr);
  }
  return (
    <div>
      <h1>To-Do List:</h1>
      <NewTask updater={updateList}/>
      <List taskList={list}/>
    </div>
  );
}

export default App;
