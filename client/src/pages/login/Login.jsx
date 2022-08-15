import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {  dispatch, isFetching, error} = useContext(Context)

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch({type: 'LOGIN_START'});

    if (userRef.current.value.trim().length === 0 || passwordRef.current.value.trim().length === 0) {
      dispatch({type: 'LOGIN_FAILURE'})
      return;
    }

    try {
      const response = await axios.post("https://react-http-298a0-default-rtdb.firebaseio.com/auth.json", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
      userRef.current.value = "";
      passwordRef.current.value = "";
      
    } catch (err) {
      dispatch({type: 'LOGIN_FAILURE'})
    }
  }

  return (
    <div className='login' style={{ 
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)) ,url(${process.env.PUBLIC_URL + 'assets/Work-Computer.webp'})`}}>
        <span className='loginTitle'>Login</span>
      <form onSubmit={submitHandler} className="loginForm">
        <label>Email</label>
        <input type="username" placeholder="Enter your username..." className='loginInput' ref={userRef}/>
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className='loginInput' ref={passwordRef}/>
        <button className="loginButton" type='submit' disabled={isFetching || error}>Login</button>
        {error && <span className='error'>something went wrong!</span>} 
      </form>
      <button className='loginRegisterButton'><Link to='/register' className='link'>REGISTER</Link></button>
    </div>
  );
}

export default Login;