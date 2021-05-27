import React from 'react';

const Button = (props) => {
    
    return(
        <button
            className = { props.className || "default-button" }
            id = { props.id }
            type = { props.type }
            style = { props.style }
            onClick = { props.onClick }
            onMouseEnter = { props.onMouseEnter }
            onMouseLeave = { props.onMouseLeave }
        >
            { props.children }
        </button>
    );
}

export default Button;