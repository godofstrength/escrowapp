import { SET_LOADING, USERS_ERROR, SET_CURRENT_USER} from "../actions/types";
const initialState = {
    transactions: null,
    currentUser: null,
    loading: false,
    error: null,
    isAuthenticated: false
}
const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload,
                loading: false,
                isAuthenticated: true
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case USERS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer