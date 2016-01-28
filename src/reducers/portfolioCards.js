import initialState from './../initialState';
import { FireBaseRepository } from './../utils/firebaseRepository';

const portfolioCards = (state, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'SUBMIT_TO_PORTFOLIO_CARDS':
            // TODO add the latest card here.
            newState.portfolioCards.push = "Not Implemented";
            return newState;
        default:
            return state || FireBaseRepository.getPortfolio().then((result) => {
                    console.log(result);
                    return initialState().portfolioCards = result;
                });
    }
};

export default portfolioCards;
