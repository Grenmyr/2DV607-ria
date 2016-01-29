import initialState from './../initialState';
import { FireBaseRepository } from './../utils/firebaseRepository';

const portfolioCards = (state, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'LOAD_PORTFOLIO_CARDS':
            newState.portfolioCards = action.cards;
            return newState;
        default:
            return state || initialState().portfolioCards;
    }
};

export default portfolioCards;
