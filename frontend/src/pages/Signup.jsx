import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import signUpServices from '../components/services/signup'
import serviceUserServices from '../components/services/serviceUser'
import SubmitBtn from '../components/auth/SubmitBtn'
import GoogleAuth from '../components/auth/GoogleAuth'
import Input from '../components/auth/Input'



const Signup = ({ setUserdata }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [error, setError] = useState('');

  const signUpHandler = async (event) => {
    event.preventDefault()
    try {
      const newUser = { fullname, email, password };
      const result = await signUpServices.signup(newUser);

      const serviceUser = { displayName:fullname, email }
      const savedServiceUser = await serviceUserServices.addServiceUser(serviceUser)
      console.log('savedServiceUser',savedServiceUser);

      // console.log(result);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('User with the provided email already exists. Please login instead.');
      } else {
        setError('An error occurred during signup.');
      }
    }
  }
  return (
    <div className='signup'>
      <h1 className='signup-heading'>Sign up to ServeU</h1>
      <p>Already have an account? <Link to='/login' className='text-blue-900'>Login</Link></p>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div className='flex flex-row'>
        <form className='left-container mt-10' onSubmit={signUpHandler}>
        <Input type={'text'} placeholder={'Full Name'} value={fullname} setValue={setFullname} required={true} />
        <Input type={'text'} placeholder={'Email'} value={email} setValue={setEmail} required={true}/>
        <Input type='password' placeholder={'Password'} value={password} setValue={setPassword} required={true}/>
        <Input type='password' placeholder={'Confirm Password'} value={confirmPassword} setValue={setconfirmPassword} required={true} />
          <SubmitBtn id='registerbtn' type={'submit'} text={'Sign Up'} />
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

      export default Signup

