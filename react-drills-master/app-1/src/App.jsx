import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value) }></input>
      <p>{input}</p>
    </div>
    );
}

export default App;
