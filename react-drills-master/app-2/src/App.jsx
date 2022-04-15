import React from 'react';
import './App.css';

function App() {
  let arr = ["Hello", "World", "Hi", "Sefton", "Dockstader"];
  return (
    <ul>
      {arr.map(str => <li>{str}</li>)}
    </ul>
  );
}

export default App;
