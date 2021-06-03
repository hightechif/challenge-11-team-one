// login
export const login = (credentials) => {
    return (dispatch, getState) => {
        // API login here, contoh firebase (jangan lupa import firebase config as firebase) :
        // firebase.auth().signInWithEmailAndPassword(
        //     credentials.email,
        //     credentials.password
        // ).then(() => {
        //     dispatch({
        //         type: 'LOGIN_SUCCESS'
        //     })
        // }).catch((err) => {
        //     dispatch({
        //         type: 'LOGIN_ERROR',
        //         err
        //     })
        // })
    }
}

// LOGOUT
export const logout = () => {
    return (dispatch, getstate) => {
        // API login here, contoh firebase (jangan lupa import firebase config as firebase) :
        // firebase.auth().signOut().then(() => {
        //         dispatch({
        //             type: 'LOGOUT_SUCCESS'
        //     })
        // });
    }
};

// REGISTER
export const register = (newUser) => {
    return (dispatch, getstate) => {
        // API login here, contoh firebase (jangan lupa import firebase config as firebase) :
        // firebase.auth().createUserWithEmailAndPassword(
        //     newUser.email,
        //     newUser.password
        // ).then(() => {
        //     dispatch({
        //         type: 'REGISTER_SUCCESS'
        //     })
        // }).catch(err => {
        //     dispatch({
        //         type: 'REGISTER_ERROR',
        //         err
        //     })
        // })
    }
}