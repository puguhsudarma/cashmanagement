const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const ACCOUNT_FAILED = 'ACCOUNT_FAILED';

export const actionType = {
    LOGIN,
    LOGIN_SUCCESS,

    LOGOUT,
    LOGOUT_SUCCESS,

    ACCOUNT_FAILED,
};

export const login = () => ({
    type: LOGIN,
});

export const loginSuccess = credentials => ({
    type: LOGIN_SUCCESS,
    payload: {
        credentials,
    },
});

export const logout = () => ({
    type: LOGOUT,
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const accountFailed = (error, type) => ({
    type: ACCOUNT_FAILED,
    payload: {
        error,
        type,
    },
});
