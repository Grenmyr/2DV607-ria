import initialState from './../initialState';
import { FireBaseRepository } from './../utils/firebaseRepository';

const portfolioCards = (state, action) => {
    switch(action.type){
        case 'LOAD_PORTFOLIO_CARDS':
            return action.cards;
        default:
            return state || initialState().portfolioCards;
    }
};

export default portfolioCards;
