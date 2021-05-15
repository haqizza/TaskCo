import axios from 'axios';

const API_URL = '/api/auth/';

class UserService{
  isLoggedIn(){
    return JSON.parse(localStorage.getItem("login"));
  }

  logout(){
    localStorage.removeItem("user");
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new UserService();