import React from 'react';

const TopBar = React.forwardRef((props,ref) => {

    return(
        <div className="topbar flex-row" ref={ ref }>
            <a href="/">
                <h3 className="width-fit font-size-24">TaskCo</h3>
            </a>
            {props.children}
        </div>
    );
})

export default TopBar;