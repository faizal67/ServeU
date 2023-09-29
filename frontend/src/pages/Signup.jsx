import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import signUpServices from '../../services/signup'



const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  // const signUpHandler = async (event) => {
  //   event.preventDefault()
  //   const newUser = { name, username, password }
  //   await signUpServices.signup(newUser)
  //   navigate('/login')
  // }
  return (
    <div className='signup'>
      <h1 className='signup-heading'>Sign up to PreP</h1>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
      
      <div className='container'>
        <form className='left-container' onSubmit={`signUpHandler`}>
          <input className='auth-input' type='email' placeholder='Email' value={email} name='name' onChange={(event) => { setEmail(event.target.value) }}></input>
          <input className='auth-input' type='text' placeholder='Password' value={password} name='password' onChange={(event) => { setPassword(event.target.value) }}></input>
          <input className='auth-input' type='text' placeholder='Confirm Password' value={confirmPassword} name='confirmPassword' onChange={(event) => { setconfirmPassword(event.target.value) }}></input>
          <button type='submit'className='signup-btn'>Sign Up</button>
        </form>
        <div className='horizontal-line'>
          <div className='line'></div>
          <p>or</p>
          <div className='line'></div>
        </div>
        <div className='right-container'>
          <div className='social-btn'>
            <img src='https://developers.google.com/static/identity/images/g-logo.png'></img>
            <p>Continue with Google</p></div>
          {/* <div className='social-btn'>
            <img src='https://wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/logos/facebook-logo2.svg'></img>
            <p>Continue with Facebook</p></div> */}
        </div>
      </div>
    </div>
  )
}

export default Signup

