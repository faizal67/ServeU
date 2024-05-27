
import { useState } from 'react'
import loginService from '../components/services/login'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import Input from '../components/auth/Input'
import SubmitBtn from '../components/auth/SubmitBtn'
import GoogleAuth from '../components/auth/GoogleAuth'


const Login = ({ setUserdata }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')            //state hook for the username
  const [password, setPassword] = useState('')            //state hook for the password


  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        email,
        password,
      });
      window.localStorage.setItem('loggedServeUuser', JSON.stringify(user));
      loginService.setToken(user.token);
      setUserdata(user);
      setEmail('');
      setPassword('');
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      alert("Wrong Username or Password");
    }
  
  
  }
  return (
    <div className='login'>
      <h1 className='login-heading'>Log in</h1>
      <p>Don't have an account? <Link to='/signup' className='text-blue-900'>Register</Link></p>
      <div className='flex flex-row'>
        <form className='left-container' onSubmit={loginHandler}>
          <Input type={'text'} placeholder={'Email'} value={email} setValue={setEmail} required={true}/>
          <Input type='password' placeholder={'Password'} value={password} setValue={setPassword} required={true}/>
          <SubmitBtn id='loginbtn' type={'submit'} text='log in' />
        </form>
        <div className='horizontal-line'>
          <div className='line'></div>
          <p>or</p>
          <div className='line'></div>
        </div>
        <div className='flex flex-col justify-center space-y-5'>
          <GoogleAuth setUserdata={setUserdata} />
          <div className='social-btn'>
            <img src='https://wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/logos/facebook-logo2.svg'></img>
            <p>Continue with Facebook</p></div>
        </div>
      </div>
    </div>
  )

}

export default Login






