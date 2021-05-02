import React from 'react';
import './App.css';
import './assets/css/main.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './router';

const App = () =>{
    return(
        <BrowserRouter>
            <RootRouter>
                
            </RootRouter>
        </BrowserRouter>
    )
}

export default App;
