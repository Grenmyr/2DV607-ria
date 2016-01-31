import { FireBaseRepository } from '../utils/firebaseRepository'

export default {
    loadPortfolioCards()  {
        return (dispatch) => {
            FireBaseRepository.getPortfolio().then((result) => {
                dispatch({type: 'LOAD_PORTFOLIO_CARDS', cards: result});
            }).catch((error) => console.log(error));
        };
    }
}
