import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const AuthService = {
    login: async (email, password) => {
        const response = await axios.post(API_URL + "/login", {
            email: email,
            password: password
        });
        if (response.data.user.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response;
    },

    logout: () => {
        localStorage.removeItem('user')
    },

    register: async(email, password) => {
        const response = await axios.post(API_URL+"/register", {
            email: email,
            password: password
        })
        if (response.data.accesstoken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response;
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },
    isAuth: () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user && user.accessToken){
            return { authorization: 'Bearer '+user.accessToken}
        }else{
            return false;
        }
    }
}

export default AuthService;