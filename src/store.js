import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import authReducer from './reducers/authenticate';
import userReducer from './reducers/user';
import spinnerReducer from './reducers/spinner';
import newDefaultCard from './reducers/newDefaultCard'
import portfolioCards from './reducers/portfolioCards'

// Hidden string dependancy on naming of object to the object name located in the initialState.
const rootReducer = combineReducers({
    loginState: authReducer,
    userState: userReducer,
    spinner: spinnerReducer,
    portfolioCard: newDefaultCard,
    portfolioCards: portfolioCards
});

const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState());

export default store;
