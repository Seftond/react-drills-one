import React, {useState} from 'react'

export default function NewTask(props) {
    const [input, setInput] = useState("");

  return (
    <div>
        <input type="text" placeholder='add new task...' onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => props.updater(input)}>Add</button>
    </div>
  )
}
