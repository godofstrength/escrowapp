import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import PrivateRoute from './services/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
