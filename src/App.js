import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
