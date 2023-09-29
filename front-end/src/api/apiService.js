import { SIGNUP_USER , SIGNIN_USER } from "./apiUrl";
import axios from "axios";

export let RegisterUser = (data) => {
    axios.post("http://localhost:3000/api/user", {
        username: data.username,
        password: data.confirmPassword,
        email: data.email,
        fname: data.fname,
        lname: data.lname,
        address: data.address,
      });

}

export const LOGIN_SERVICE = (username , password) => {
    axios.post(SIGNIN_USER , {username , password})
}
