import React from 'react'

const CardItem = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {props.children}
        
    </div>
  )
}

export default CardItem