import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function alertUser(user, pass){
  //   alert(`Username: ${user}, Password: ${pass}`)
  // }
  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => alert(`Username: ${username}, Password: ${password}`)}>Login</button>
    </div>
  );
}

export default App;
