import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import { connect, useDispatch } from 'react-redux';
import AuthService from './services/authService';
import { setCurrentUser } from './actions/UserActions';
import {SkipAuth, RequireAuth} from  './components/auth/AuthController'

function App(props) {
  // props is accessed normally here
  // console.log(props.isAuthenticated)
  let dispatch = useDispatch();
  let currentUser = AuthService.getCurrentUser()
  useEffect(() => {
    dispatch(setCurrentUser(currentUser));
  }, []);
 
  return (   
    <Router>
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Layout props={props}/>}>
          <Route index element={<RequireAuth props={props}><Dashboard props={props}/></RequireAuth>}/>
        </Route>
        <Route path="/" element={<>
        {/* <Navbar/> */}
        <Home/>
        </>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<SkipAuth props={props}><Login/></SkipAuth>}/>
        </Routes>  
    </div>
    </Router>
  );
}

const mapStateToProps = store => ({
  ...store.users
})

export default connect(mapStateToProps)(App);
