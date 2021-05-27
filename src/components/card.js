import React from 'react';

const Card = (props) => {
    return(
        <div
            className = { props.className || "default-card" }
            id = { props.id }
            type = { props.type }
            style = { props.style }
            onClick = { props.onClick }
        >
            { props.children }
        </div>
    );
}

export default Card;