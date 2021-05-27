import React, { Component, useContext } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';

const API_URL = 'http://127.0.0.1:4000/';


class UserService{
  isLoggedIn(ComposedComponent = false){
    // https://stackoverflow.com/questions/45905472/auth-component-as-middleware-in-react
    class Auth extends Component {
      
      componentDidMount(){
        if(!JSON.parse(localStorage.getItem("user")).isLoggedIn){
          window.location.href = '/login';
        }
        if(JSON.parse(localStorage.getItem("user")).userType !== "user"){
          window.location.href = '/login';
        }
      }
      
      render(){
        return <ComposedComponent/>
      }
    }
    
    return Auth;
  }

  getTimestamp(date){
    let time = date ? new Date(date) : new Date();
    return dateFormat(time, "dd-mm-yyyy");
  }

  getTimeISO(date){
    let f = date.split('-');
    return f[2] + "-" + f[1] + "-" + f[0];
  }
  
  async getUser(username){
    const response = await axios.get(API_URL + 'student?student_id=' + username);

    return {
      isLoggedIn: true,
      userType: "user",
      userData: response.data[0]
    }
    // (await axios({
    //   url: API_URL + 'student?student_id=' + username,
    //   method: "get",
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //   }
    // })).data[0];
  }

  saveCurrentUser(data){
    localStorage.setItem("user", JSON.stringify(data));
  }
  
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

  updatePassword(student_id){
    const response = axios.post(API_URL + 'student?student_id=' + student_id);
  }

  async getNotes(){
    //これ大事ね。
    return axios.get(API_URL + 'note')
      .then((res) => res.data);
  }

  async getNote(note_id){
    return axios.get(API_URL + 'note?note_id=' + note_id)
      .then((res) => res.data[0]);
  }
  
  changeNoteVisibility(note_id){
    axios.post(API_URL + 'note', note_id);
  }
  
  async createNote(){
    const res = await axios.get(API_URL + 'note/create');
    return res;
  }
    
  async updateNote(note){
    const res = await axios.put(API_URL + 'note', note);
    return res;
  }
}

export default new UserService();