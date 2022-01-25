import authHeader from './authHeader';
import {useNavigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let navigate = useNavigate()
    const isAuth = authHeader()
   return isAuth? children: navigate('/login')
};
export default PrivateRoute;
 