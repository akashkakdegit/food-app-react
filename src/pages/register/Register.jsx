import "./register.css";
import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../login/Login";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem("username", JSON.stringify(username));

      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 return (
    <>
 
        <div>
          {" "}
          {login ? (
            <div>
              <h3 className='text-center check'>Register</h3>
            <form onSubmit={handleFormSubmit} className="checkout reg">

              <div>
                <label  className='formlabel'>Name</label>
                <input
                  type="text"
                  className="inputform"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div >
                <label className='formlabel' >Email</label>
                <input
                  type="email"
                  className="inputform"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div >
                <label className='formlabel'>Password</label>
                <input
                  type="password"
                  className="inputform"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div >
                <label className='formlabel'>Phone No.</label>
                <input
                  type="Phone"
                  className="inputform"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div >
                <label className='formlabel'>Choose your Profession</label>
                <Form.Control
                  as="select"
                  className='select'
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>FrontEnd Devloper</option>
                  <option>BackEnd Devloper</option>
                  <option>Fullstack Devloper</option>
                  <option>intern</option>
                </Form.Control>
              </div>

              <button type="submit" className='button2'>
                Register
              </button>
              <p onClick={handleClick} className='already'>
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger" className='formlabel warning'>
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
               </div>
          ) : (
            <Login />
          )
         }
        
        </div>
    
    </>
  );
}

export default Register;
