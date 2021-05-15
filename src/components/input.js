import React from 'react';

const Input = (props) => {
  return(
    <input
      className = { props.className || "default-input" }
      id = { props.id }
      name = { props.name }
      type = { props.type }
      value = { props.value || ""}
      style = { props.style }
      onClick = { props.action }
      onChange = { props.onChange }
      placeholder = { props.placeholder }
    >
      { props.title }
    </input>
  )
}

export default Input;