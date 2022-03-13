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
  let dispatch = useDispatch();
  let currentUser = AuthService.getCurrentUser()
  useEffect(() => {
    AuthService.isAuth();
    dispatch(setCurrentUser(currentUser));
  }, []);
 
  return (   
    <Router>
    <div className="App">
      <Routes>
        <Route props={props} path='/dashboard' element={<Layout/>}>
          <Route index element={<RequireAuth props={props}><Dashboard/></RequireAuth>}/>
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
  user: store.users,
  loading: store.loading
})

export default connect(mapStateToProps)(App);
