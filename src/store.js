import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import authReducer from './reducers/authenticate';
import userReducer from './reducers/user';
import spinnerReducer from './reducers/spinner';

// Hidden string dependancy on naming of object to the object name located in the initialState.
const rootReducer = combineReducers({
    loginState: authReducer,
    userState: userReducer,
    spinner: spinnerReducer
});

const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState());


if (module.onReload) {
    module.onReload(() => {
        const nextReducer = combineReducers({
            loginState: authReducer,
            userState: userReducer,
            spinner: spinnerReducer
        });
        store.replaceReducer( nextReducer);

        // return true to indicate that this module is accepted and
        // there is no need to reload its parent modules
        return true
    });
}


export default store;
