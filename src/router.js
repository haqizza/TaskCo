import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import UserService from './services/User.service';
import Dashboard from './views/Dashboard';
// import AdminDashboard from './views/Dashboard/AdminDashboard';
// import UserDashboard from './views/Dashboard/UserDashboard';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';

const RootRouter = () =>{
  return(
    <Switch>
      <Route path='/dashboard'>
        {/* {() => {UserService.isLoggedIn ? <UserDashboard/> : <AdminDashboard/>}} /> */}
        <Dashboard></Dashboard>
      </Route>
      <Route path='/login'>
        <LoginPage/>
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

