const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            console.log(state)
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'REGISTER_SUCCESS':
            console.log('REGISTER success');
            return {
                ...state,
                authError: null
            }
        case 'REGISTER_ERROR':
            console.log('REGISTER error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer;