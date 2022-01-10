import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../services/authService';


const Login = (props) => {
  // set state of vairables using setState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("")

 const onChangeEmail = (e) => {
    setEmail(e.target.value)
 }
 const onChangePassword = e => {
   setPassword(e.target.value)
 }

const navigate = useNavigate()
const LoginHandler = async(e) => {
  e.preventDefault();
  setLoading(true);
  // handle login from authService
  const response = await AuthService.login(email, password);
  if(response.data.accessToken){
    navigate("/dashboard");
    window.location.reload(true);
    setLoading(false);
  }
}

  return(
    <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""></img>
                  <span class="d-none d-lg-block">{process.env.REACT_APP_WEBSITE_NAME}</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your email & password to login</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate onSubmit={LoginHandler}>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Your Email</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" onChange={onChangeEmail} value={email} name="email" class="form-control" id="yourEmail" required></input>
                        <div class="invalid-feedback">Please enter your Email</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="passwword" onChange={onChangePassword} value={password} class="form-control" id="yourPassword" required></input>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"></input>
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
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