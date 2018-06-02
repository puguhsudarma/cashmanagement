import { actionType as type } from '../actions/action.account';

const initialState = {
    isLoggedIn: false,
    loadingLogin: false,
    acc: {},
    error: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN:
            return {
                ...state,
                loadingLogin: true,
            };

        case type.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loadingLogin: false,
                acc: {
                    ...state.acc,
                    ...action.payload.credentials,
                },
            };

        case type.LOGOUT_SUCCESS:
            return {
                ...state,
                ...initialState,
            };


        case type.ACCOUNT_FAILED:
            return {
                ...state,
                error: action.payload,
                loadingLogin: false,
            };

        default:
            return state;
    }
};
