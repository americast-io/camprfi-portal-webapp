import axios from 'axios';
import { 
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

} from '../constants/userConstants';
import { 
    registerUser, 
    userLogin,
    loadUser,
    logoutUser
} from '../services/internalApiService';


// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }

        const data  = await userLogin({email, password}, config);
        // const { data }  = await axios.post('http://localhost:8000/api/vi/auth/login', {email, password}, config, {withCredentials: true});

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// Register user
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }

        const data  = await registerUser(userData, config);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        
        })



    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Load user
export const loadUserAction = () => async (dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST})

        const data  = await loadUser();

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {
        await logoutUser({withCredentials: true});

        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}