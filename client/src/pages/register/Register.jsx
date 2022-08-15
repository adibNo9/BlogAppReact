
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
     if (username.trim().length === 0 | email.trim().length === 0 | password.trim().length === 0 ) {
      await setError({message: "Please fill the form!"})
      return;
    }
    try {
      const response = await axios.post("https://react-http-298a0-default-rtdb.firebaseio.com/auth.json", {
        username,
        email,
        password
      });
      console.log(response);
      // response.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  return (
    <div className='register' style={{ 
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)) ,url(${process.env.PUBLIC_URL + 'assets/laptop_Kirill-Smyslov_getty.jpg'})`}}>
        <span className='registerTitle'>Register</span>
      <form onSubmit={submitHandler}  className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." className='registerInput' onChange={(e)=>{setUsername(e.target.value)}} />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." className='registerInput' onChange={(e)=>{setEmail(e.target.value)}} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className='registerInput' onChange={(e)=>{setPassword(e.target.value)}} />
        <button className="registerButton">Register</button>
      </form>
      <button className='registerLoginButton' type='submit'><Link to='/login' className='link'>LOGIN</Link></button>
      {error && <span className='error'>{error.message}</span> }
    </div>
  );
}

export default Register;