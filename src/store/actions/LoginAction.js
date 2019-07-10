
/**
 * Action Creator for action type 'SET_LOGIN_MODAL' and returns action object.
 *
 * @export
 * @param {any} bool
 * @returns
 */

export function loginUserSuccess(user) {
    return {
        type: 'LOGIN_USER_SUCCESS',
        user
    }
}

export function loginUserFailure(bool, msg) {
    return {
        type: 'LOGIN_USER_FAILURE',
        status: bool,
        failureMsg: msg
    }
}

export function isUserLoggedin(bool) {
    return {
        type: 'IS_USER_LOGGEDIN',
        isUserLoggedin: bool
    }
}

export function isLoginLoading(bool){
    return {
        type: 'IS_LOGIN_LOADING',
        isLoginLoading: bool
    }
}

export function isbuttonClick(bool){
    return {
        type: 'IS_BUTTON_CLICKED',
        isbuttonClick: bool
    }
}