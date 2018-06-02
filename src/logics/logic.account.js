import { createLogic } from 'redux-logic';
import {
    actionType as type,
} from '../actions/action.account';
const loginLogic = createLogic({
    type: type.LOGIN,
    warnTimeout: 0,
    processOptions: {
        dispatchMultiple: true,
    },
    process({ AccountKit, axios, action }, dispatch, done) {
        
    },
});

const logoutLogic = createLogic({
    type: type.LOGOUT,
    process({ AccountKit }, dispatch, done) {
       
    },
});

export default [
    loginLogic,
    logoutLogic,
];
