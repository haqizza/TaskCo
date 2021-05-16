import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

const height = 45;

export const LayoutProvider = (props) => {
    const [layout, setLayout] = useState({
        topBarHeight: height,
        windowHeight: 0,
        windowWidth: 0,
    });

    return(
        <LayoutContext.Provider value={ [layout, setLayout] }>
            { props.children }
        </LayoutContext.Provider>
    );
}