import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from '../reducers';
import logic from '../logics';

const dependencies = {

};

const logicMiddleware = createLogicMiddleware(logic, dependencies);

const middlewares = [
    logicMiddleware,
];

if (__DEV__) {
    middlewares.push(createLogger());
}

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares), autoRehydrate()),
    );
};
