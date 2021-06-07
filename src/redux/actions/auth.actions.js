// login
import axios from "axios";
// axios.defaults.withCredentials = true;

export const login = (credentials) => {
    return (dispatch, getState) => {
        axios.post("https://cv-programmer-api.herokuapp.com/api/v1/auth/login", credentials)
        .then((res) => {
            console.log(res.data)
            if (res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res
            })
        }).catch((err) => {
            // console.log(err.message)
            dispatch({
                type: 'LOGIN_ERROR',
                payload: err
            })
        })
    }
}

// LOGOUT
export const logout = () => {
    return (dispatch, getstate) => {
        // axios.get('https://cv-programmer-api.herokuapp.com',{ withCredentials: true })
        // .then((res) => {
        //         dispatch({
        //             type: 'LOGOUT_SUCCESS'
        //     })
        // });
        dispatch({
            type: 'LOGOUT_SUCCESS'
        })
    }
};

// REGISTER
export const register = (newUser) => {
    // console.log('masuk reducer register')
    let resp = ""
    return (dispatch, getstate) => {
        axios.post("https://cv-programmer-api.herokuapp.com/api/v1/auth/register", newUser)
        .then(async (res) => {
            resp = res;
            const credentials = {
                email: newUser.email,
                password: newUser.password
            }
            // console.log(credentials)
            await axios.post("https://cv-programmer-api.herokuapp.com/api/v1/auth/login", credentials)
            .then((res) => {
                // console.log(res.data)
                if (res.data.token){
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
            }).catch((err) => {
                console.log(err.message)
                dispatch({
                    type: 'LOGIN_ERROR',
                    err
                })
            })
        })
        .then(() => {
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: resp
            })
        }).catch(err => {
            // console.log(err)
            dispatch({
                type: 'REGISTER_ERROR',
                err
            })
        })
    }
}