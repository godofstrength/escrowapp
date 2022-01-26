import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import PrivateRoute from './services/PrivateRoute';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Layout/>}>
          <Route index element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Route>
        <Route path="/" element={<>
        <Navbar/>
        <Home/>
        </>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
