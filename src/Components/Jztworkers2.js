import React, { useState } from "react";
import "../Styles/logins.css"; // Adjust the path according to your file structure
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Navbar from "./Navbar copy";

function Jztworkers2() { // Change the component name to start with an uppercase letter
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [JztworkersStatus, setJztworkersStatus] = useState("");
  //const [registerStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();

  
  const Jztworkers = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setJztworkersStatus(response.data.message);
      }else{
        setJztworkersStatus(response.data[0].email);
         // Redirect to another page upon successful login
    //     history.push("/Jztworkers");
    navigate('/jztworkers3'); // Redirect upon successful login

      }
    })
    .catch((error) => {
      console.error("Login error: ", error);
    });
  }

  return(
  <div>
    
      <Navbar />
      <div className="container">
      <div className="loginForm">
        <form>
          <h4>Login Here</h4>
          <label htmlFor="username">Username*</label>
          <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required />
          <label htmlFor="password">Password*</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className="button" type="submit" onClick={Jztworkers} value="Login" />
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{JztworkersStatus}</h1>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Jztworkers2;