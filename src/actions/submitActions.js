/**
 * Created by dav on 2016-01-13.
 */
import base64Encode from './../utils/base64Encode';
import Firebase from 'firebase';
import { FireBaseRepository } from '../utils/firebaseRepository';



export default {
    submit(portfolioCard) {
        return (dispatch) => {
            dispatch({type: 'START_SPINNER'});
            base64Encode(portfolioCard.image)
                .then((result) => {
                    portfolioCard.image = result;
                    FireBaseRepository.submitPortfolio(portfolioCard);
                    dispatch({type: 'SUBMIT_TO_PORTFOLIO_CARDS'});
                    dispatch({type: 'STOP_SPINNER'});
                })
                .catch((err) => {
                    dispatch({type: 'STOP_SPINNER'});
                    console.log('error', err);
                });
        }
    }
}