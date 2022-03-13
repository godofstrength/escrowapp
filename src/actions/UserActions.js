import axios from "axios";
import AuthService from "../services/authService";
import { SET_LOADING, GET_USERS, USERS_ERROR, SET_CURRENT_USER } from "./types";
const API_URL = process.env.REACT_APP_API_URL

// get users from server
export const getUsers = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get(API_URL+'/users'); 
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload : error
        })
    }  
};
// get current user from localstorage
export let setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser
    }
}
// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

