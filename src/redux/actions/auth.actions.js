// login
import axios from "axios";
axios.defaults.withCredentials = true;

export const login = (credentials) => {
    return (dispatch, getState) => {
        axios.post("https://cv-programmer-api.herokuapp.com/api/v1/auth/login", credentials)
        .then((data) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data
            })
        }).catch((err) => {
            console.log(err.message)
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}

// LOGOUT
export const logout = () => {
    return (dispatch, getstate) => {
        axios.get('https://cv-programmer-api.herokuapp.com/logout',{ withCredentials: true })
        .then((res) => {
                dispatch({
                    type: 'LOGOUT_SUCCESS'
            })
        });
    }
};

// REGISTER
export const register = (newUser) => {
    return (dispatch, getstate) => {
        axios.post("https://cv-programmer-api.herokuapp.com/api/v1/auth/register", newUser)
        .then(() => {
            dispatch({
                type: 'REGISTER_SUCCESS'
            })
        }).catch(err => {
            dispatch({
                type: 'REGISTER_ERROR',
                err
            })
        })
    }
}