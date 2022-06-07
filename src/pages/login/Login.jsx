import "./login.css"
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [profile, setProfile] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setProfile(!profile);
      setFlag(false);
    }
  }

  return (
    <div>
      {profile ? (
        <div>
      <h3 className='text-center check'>LogIn</h3>
        <form className='checkout login' onSubmit={handleLogin}>
      
          <div>
            <label className='formlabel'>Email</label>
            <input
              type="email"
              className="inputform" 
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

         <div>
            <label className='formlabel'>Password</label>
            <input
              type="password"
              className="inputform" 
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className='button2'>
            Login
          </button>
          <button type="submit"  className='button2 account'>
          <Link to="/register" style={{textDecoration:'none',color:'#121111'}}>Create a New Account</Link>
              </button>
        
          {flag && (
            <Alert color="primary" variant="warning" className='warning'  >
              fill correct Info else keep trying...
            </Alert>
          )}
        </form>
      </div>
      ) : (
        <Profile/>
      )}
    </div>
  );
}

export default Login;



