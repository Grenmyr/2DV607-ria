import initialState from './../initialState';

const newDefaultCard = (state) => {
            return state || initialState().portfolioCard
};

export default newDefaultCard;
