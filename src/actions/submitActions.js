/**
 * Created by dav on 2016-01-13.
 */
import base64Encode from './../utils/base64Encode';
export default {
    submit(portfolioCard) {
        return async (dispatch) => {
            dispatch({type: 'START_SPINNER'});
            base64Encode(portfolioCard.image)
                .then((result) => console.log(result))
                .catch((err) => {
                   console.log('error', err);
                });
            let submit = await notImplementedFunction(portfolioCard);
            if (submit.isSuccessful) {
                dispatch({type: 'SUBMIT_PORTFOLIO_CARD'});
            } else {
                console.log("Something went wrong.")
            }
        }
    }
}