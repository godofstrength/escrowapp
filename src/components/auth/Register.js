import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../services/authService';
import {useForm} from 'react-hook-form'
import Spinner from '../Spinner';
import Alert from '../Alert';


const Register = () => {
  const {register, handleSubmit, trigger,formState: {errors}} = useForm()
   // set state of vairables using setState hook
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(true);
   const [message, setMessage] = useState("");

  //  hook input values top state
   const onChangePassword = (e) => setPassword(e.target.value);
    const onChangeEmail = e => setEmail(e.target.value);
  

     // handle registration from authservice
   const navigate = useNavigate()
   const registerHandler = async(e) => {
    setLoading(true)
    const response = await AuthService.register(email, password);
    if(response){
    setLoading(false)
    if(response.data.errors){
      setMessage(response.data.errors[0].msg)
    }
  
    if(response.data.accesstoken){
      navigate('/dashboard');
      window.location.reload();
    }
   }else{
     setLoading(false);
     setMessage('An error has accoured');
   }
  }
  // set loading to false when component mounts
  useEffect(() => {
    setLoading(false)
  }, []);
    return (
      <main>
      <div className="container">
  
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
  
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt=""></img>
                    <span className="d-none d-lg-block">{process.env.REACT_APP_WEBSITE_NAME}</span>
                  </a>
                </div>
  
                <div className="card mb-3">
  
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p className="text-center small">Enter your personal details to create account</p>
                    </div>
                    {message? <Alert alertType='alert-danger' alertText={message}/>: ''}
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(registerHandler)} noValidate>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">Your Email</label>
                         <input type="email" name="email" 
                        {...register('email', {required: 'Email is required*',
                      pattern: {
                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: 'Please enter a valid email address'
                      }} )}
                      onKeyUp={() => {
                        trigger('email')}}
                      onChange={onChangeEmail}
                        className="form-control" id="yourEmail"></input>
                        {/* {errors.email && (<small className='text-danger'>{errors.email.message}</small>)} */}
                      </div>
  
  
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password"  name="password" 
                        {...register('password', 
                        {
                          required: 'Password is required*',
                          minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                          },
                          pattern: {
                            value: /^(?=.*[0-9])(?=.*[!@#$%^_&*])[a-zA-Z0-9!@#$%^_&*]/,
                            message: 'Password must contain a number and a special character'
                          }
                        })} 
                        onKeyUp={() => {
                          trigger('password')}}
                        onChange={onChangePassword}
                        className="form-control" id="yourPassword"></input>
                        {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">{loading ? <Spinner height='40px' width='40px' top='0%' left='40%'/>: 'Create Account'}</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Already have an account? <Link to="/login">Log in</Link></p>
                      </div>
                      <div className="col-12">
                          <p className="small mb-0">By registering you agree to the {process.env.REACT_APP_WEBSITE_NAME} <Link to="/terms">Terms of use</Link> and Privacy Policy</p>
                      </div>
                    </form>
  
                  </div>
                </div>
  
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
  
              </div>
            </div>
          </div>
  
        </section>
  
      </div>
    </main> 
  )
  

}
export default Register;
     