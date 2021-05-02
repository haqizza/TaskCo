import React from 'react';

const Button = (props) => {
    return(
        <button
            className = { props.class }
            onClick = { props.onclick }
        >
            Button
        </button>
    );
}

export default Button;