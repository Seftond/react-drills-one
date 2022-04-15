import React from 'react'
import ToDo from './ToDo';

export default function List(props) {
    let list = props.taskList.map((element, index) => {
        return (<ToDo key={index} task={element}/>)
    });
  return (
    <div>
        {list}
    </div>
  )
}
