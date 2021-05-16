import React from 'react';

const Button = (props) => {
    
    return(
        <button
            className = { props.class || "default-button" }
            id = { props.id }
            type = { props.type }
            style = { props.style }
            onClick = { props.action }
        >
            { props.children }
        </button>
    );
}

export default Button;