import initialState from './../initialState';

const portfolioCards = (state, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'SUBMIT_TO_PORTFOLIO_CARDS':
            // TODO add the latest card here.
            newState.portfolioCards = "Not Implemented";
            return newState;
        default:
            return state || initialState().portfolioCards.push("why not working?")
    }
};

export default portfolioCards;
