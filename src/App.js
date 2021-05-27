import React from 'react';
import './App.css';
import './assets/css/main.scss';
import { BrowserRouter} from 'react-router-dom';
import RootRouter from './router';
import { LayoutProvider } from './components/Layout/layoutContext';

const App = () =>{

    return(
        <BrowserRouter>
            <LayoutProvider>
                <RootRouter>
                </RootRouter>
            </LayoutProvider>
        </BrowserRouter>
    )
}

export default App;
