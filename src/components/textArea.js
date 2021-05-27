import React from 'react';

const TextArea = (props) => {
  return(
    <textarea
      className = { props.className || "default-input" }
      id = { props.id }
      name = { props.name }
      rows = { props.rows }
      cols = { props.cols }
      style = { props.style }
      value = { props.value || "" }
      onClick = { props.action }
      onChange = { props.onChange }
      onInput = { props.onInput }
      placeholder = { props.placeholder }
      readOnly= { props.readOnly }
      defaultValue = { props.defaultValue }
    >
    </textarea>
  )
}

export default TextArea;