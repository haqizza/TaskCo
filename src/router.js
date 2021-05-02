import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './view/LandingPage';

const RootRouter = () =>{
  return(
    <Switch>
      <Route path='/login'>
        <div>login</div>
      </Route>
      <Route path='/' exact={ true }>
        <LandingPage/>
      </Route>
      <Route path='*'>
        <div>Error 404</div>
      </Route>
    </Switch>
  )
}

export default RootRouter;

