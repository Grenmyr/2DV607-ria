/**
 * Created by dav on 2016-01-13.
 */
import base64Encode from './../utils/base64Encode';
import Firebase from 'firebase';

const submitToFirebase = (portfolioCard) => {
    let fireBaseRef = new Firebase('portfoliodavidg.firebaseIO.com/' + 'portfolio/');
    fireBaseRef.push(portfolioCard);
};

export default {
    submit(portfolioCard) {
        return async (dispatch) => {
            dispatch({type: 'START_SPINNER'});
            base64Encode(portfolioCard.image)
                .then((result) => {
                    portfolioCard.image = result;
                    submitToFirebase(portfolioCard)
                })
                .catch((err) => {
                   console.log('error', err);
                });
        }
    }
}