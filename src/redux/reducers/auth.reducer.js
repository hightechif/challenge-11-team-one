const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: `Login Failed, ${action.payload}`
            }
        case 'LOGIN_SUCCESS':
            // console.log('login success')
            // console.log(action.payload.data)
            return {
                ...state,
                authError: null,
                user: action.payload.data
            }
        case 'LOGOUT_SUCCESS':
            // console.log('signout success');
            localStorage.removeItem("user");
            return {
                ...state,
                authError: null,
                user: null
            }
        case 'REGISTER_SUCCESS':
            // console.log('REGISTER success');
            return {
                ...state,
                authError: null,
                user: action.payload.data
            }
        case 'REGISTER_ERROR':
            // console.log('REGISTER error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer;