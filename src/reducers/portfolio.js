import initialState from './../initialState';

const portfolio = (state, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'SUBMIT_PORTFOLIO_CARD':
            // not implemented
            newState.portfolioCard = "Not Implemented";
            return newState;
        case 'POPULATE_PORTFOLIO_CARDS':
            // not implemented populate an array.
            newState.portfolioCards = "Not Implemented";
            return newState;
        default:
            return state || initialState().portfolioCard;
    }
};

export default portfolio;
