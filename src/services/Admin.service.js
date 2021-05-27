import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:4000/';

class AuthService{
  isLoggedIn(ComposedComponent = false){
    class Auth extends Component {

      componentDidMount(){
        if(!JSON.parse(localStorage.getItem("user")).isLoggedIn){
          window.location.href = '/login';
        }
        if(JSON.parse(localStorage.getItem("user")).userType !== "admin"){
          window.location.href = '/login';
        }
      }
      
      render(){
        return <ComposedComponent/>
      }
    }

    return Auth;
  }

  getClasses(){
    return [
        {
            code: "RTYU56T",
            title: "Kelas A"
        },
        {
            code: "R5RAIPA",
            title: "Kelas Z"
        },
    ]
  }

  saveCurrentUser(data){
    localStorage.setItem("user", JSON.stringify(data));
  }

  appoveClassRep(nim){

  }

  declineClassRep(nim){

  }

  deleteClassRep(nim){
    
  }

  getUser(nim){
    return {
      student_id: "1900011",
      faculty_id: "D",
      study_program_id: "D7612",
      student_name: "Mahasiswa A",
      student_place_of_birth: "Bandung",
      student_date_of_birth: "10-28-2000",
      student_gender: "Laki-Laki",
      student_entry_year: 2019,
      student_bio: "hjsadgjahsjhgdasmbzcxhjgdsagsadhjgjhgjhgjasdghjgdjhgsadsahdgshdagddd"
    }
  }

  updateUser(user){

  }

  banUser(nim){
    
  }

  deleteUser(nim){

  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();