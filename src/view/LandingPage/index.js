/* eslint-disable no-useless-constructor */
import React, { useEffect } from 'react';
import Button from '../../components/button';
import TopBar from '../../components/TopBar';
import Box from '../../components/TopBar';

const LandingPage = (props) => {
    var data = 0;
    
    useEffect(() => {
        console.log('update Landing Page');
    },[data])

    const addOne = () => {
        console.log(data++);
    }


    return(
        <div>
            <TopBar/>
            <h1 className="white red-rose" >TaskCo</h1>
        </div>
    )
}

export default LandingPage;