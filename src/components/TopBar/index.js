import React from 'react';
import Button from '../button';

const TopBar = React.forwardRef((props,ref) => {

    return(
        <div className="topbar flex-row" ref={ ref }>
            <a href="/">
                <h3 className="width-fit font-size-24">TaskCo</h3>
            </a>
            
            <Button action = { props.buttonAction }>
                {props.children}
            </Button>
        </div>
    );
})

export default TopBar;