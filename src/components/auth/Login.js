import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import AuthService from '../../services/authService';
import Spinner from '../Spinner';
import { useForm } from 'react-hook-form';
import Alert from '../Alert';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/UserActions';

const Login = (props) => {
  // set state of vairables using setState hook
  const {register, handleSubmit, trigger, formState:{errors}} = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("")

  const changePassword = e => setPassword(e.target.value);
  const changeEmail = e => setEmail(e.target.value);

const navigate = useNavigate();
const dispatch = useDispatch();
const LoginHandler = async(e) => {
  setLoading(true);
  // handle login from authService
  const response = await AuthService.login(email, password);
  if(response){
    console.log(response)
    setLoading(false);
  if(response.data.errors){
    setMessage(response.data.errors[0].msg);
  }
  if(response.data.user.accessToken){
    const currentUser = await AuthService.getCurrentUser();
    dispatch(setCurrentUser(currentUser))
    navigate("/dashboard");
  }}
}
// set loading to false when component mounts
useEffect(() => {
  setLoading(false)
}, [])
  return(
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
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your email & password to login</p>
                  </div>
                  {message ? <Alert alertType='alert-danger' alertText={message}/>: ''}
                  <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(LoginHandler)}>

                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">Email Address</label>
                      <input type="email" name="email" onChange={changeEmail} value={email} className="form-control" id="yourEmail"
                      {...register('email', {required: 'Email is required'})}
                      onKeyUp={() => {
                        trigger('email')
                      }}
                      onChange={changeEmail}
                      ></input>
                      {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                    </div>


                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Password</label>
                      <input type="password" name="passwword" value={password} className="form-control" id="yourPassword"
                      {...register('password', {required: 'Password is required'})}
                      onKeyUp={() => {
                        trigger('password')
                      }}
                      onChange={changePassword}
                      ></input>
                      {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
                    </div>

                    <div className="col-12">
                    <p className="small mb-0"><Link to="/register">Forgot Password?</Link></p>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">{loading ? <Spinner height='40px' width='40px' top='0%' left='40%'/>: 'Login'}</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
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
  );
}
export default Login;