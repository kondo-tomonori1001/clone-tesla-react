import React from 'react';
import './button.css';

export const Button = (props) => {
  return (
    <>
      <a
       className={`btn ${props.type === "left" ? 
       'btn--left' : props.type === "right" ? 
       'btn--right' : ''}`}
       href={props.link}
      >{props.text}</a>
    </>
  )
}
