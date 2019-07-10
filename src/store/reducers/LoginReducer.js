
/**
 * Reducer function that returns new state for the action of type:LOGIN_USER_FAILURE
 *
 * @export
 * @param {boolean} [state=false]
 * @param {any} action
 * @returns
 */
export function loginUserFailure(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_USER_FAILURE':
            var response = {
                status: action.status,
                failureMsg: action.failureMsg
            }
            return response;
        default:
            return state;
    }
}


/**
 * Reducer function that returns new state for the action of type:IS_USER_LOGGEDIN
 *
 * @export
 * @param {boolean} [state=false]
 * @param {any} action
 * @returns
 */
export function isUserLoggedin(state = false, action) {
    switch (action.type) {
        case 'IS_USER_LOGGEDIN':
            return action.isUserLoggedin;
        default:
            return state;
    }
}

/**
 * Reducer function that returns new state for the action of type:LOGIN_USER_SUCCESS
 *
 * @export
 * @param {boolean} [state={}]
 * @param {any} action
 * @returns
 */
export function loginUserSuccess(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':
            return action.user;
        default:
            return state;
    }
}

export function isbuttonClick(state = {}, action) {
    switch (action.type) {
        case 'IS_BUTTON_CLICKED':
            return action.user;
        default:
            return state;
    }
}


