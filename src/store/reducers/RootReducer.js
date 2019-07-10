import {
    combineReducers
} from 'redux';

import {
    loginUserFailure,
    loginUserSuccess,
    isUserLoggedin,
    isbuttonClick,
} from './LoginReducer';


const rootReducer = combineReducers({
    isUserLoggedin,
    loggedInUser: loginUserSuccess,
    isLoginFailed: loginUserFailure,
    isbuttonClick: isbuttonClick,
})

export default rootReducer;