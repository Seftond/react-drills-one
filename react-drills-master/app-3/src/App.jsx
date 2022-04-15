import React, { useState } from 'react';
import './App.css';

function App() {
  let arr = ["Israel", "Getu", "Sefton", "Dockstader", "Hello", "World"]
  const [str, setStr] = useState("");
  const [filtered, setFiltered] = useState([])

  function filterArr(element){
    let filteredArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i].includes(element)){
        filteredArr.push(arr[i])
      }
    }
    setFiltered(filteredArr);
  }
  return (
    <div>
      <input type="text" placeholder='Filter Text' onChange={(e) => setStr(e.target.value)}></input>
      <button onClick={() => filterArr(str)}>Filter</button>
      {arr.map((element, index) => <h2 key={index}>{element}</h2>)}
      <h3>Filtered Items:</h3>
      {filtered.map((element, index) => <h2 key={index}>{element}</h2>)}

    </div>
  );
}

export default App;
