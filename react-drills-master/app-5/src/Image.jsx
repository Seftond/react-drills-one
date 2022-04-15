import React from 'react'

export default function Image(props) {
  return (
    <div>
        <img src={props.source} alt='Happy Dog'></img>
    </div>
  )
}
