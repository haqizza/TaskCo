import axios from 'axios';
import bcrypt from 'bcryptjs';

const API_URL = 'http://127.0.0.1:4000/';
const saltRounds = 12;

class AuthService{
  async login(username, password){
    bcrypt.hash(password + process.env.REACT_APP_KAGI, saltRounds, (err, pass) => {
      axios({
        url: process.env.REACT_APP_API_URL + 'login',
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        data: {
          nim: username,
          password: pass
        }
      }).then(res => {
        console.log(res);
        return res
      });
    });
    // console.log(response.data.accessToken);
    // return bcrypt.compare(password + process.env.KAGI, response.data[0].password, function(err, res) {
    //   return res
    // });
  }

  async register(username, password){
    bcrypt.hash(password + process.env.REACT_APP_KAGI, saltRounds, (err, pass) => {
      // axios({
      //   url: process.env.REACT_APP_API_URL + 'register',
      //   method: "post",
      //   headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Origin': '*'
      //   },
      //   data: {
      //     nim: username,
      //     password: pass
      //   }
      // })
      axios.post(process.env.REACT_APP_API_URL + 'register', {
        data: {
              nim: username,
              password: pass
            }
      })
      .then(res => {
        console.log(res);
        return res.data.code === 200 ? true : false; 
      });
    });
  }
  
  logout(){
    localStorage.removeItem("user");
    window.location.href = "/";
  }
}

export default new AuthService();