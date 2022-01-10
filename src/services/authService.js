import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const AuthService = {
    login: async (email, password) => {
        const response = await axios.post(API_URL + "/login", {
            email: email,
            password: password
        });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('user')
    },

    register: async(email, password) => {
        const response = await axios.post(API_URL+"/register", {
            email: email,
            password: password
        })
        if(response){
            console.log(response.data)
        }
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default AuthService;