/**
 * Created by dav on 2016-01-13.
 */
import base64Encode from './../utils/base64Encode';
export default {
    submit(portfolioCard) {
        return async (dispatch) => {
            dispatch({type: 'START_SPINNER'});
            const promise = base64Encode(portfolioCard.image);
            promise.then((result) => console.log(result));

            let submit = await notImplementedFunction(portfolioCard);
            if (submit.isSuccessful) {
                dispatch({type: 'SUBMIT_PORTFOLIO_CARD'});
            } else {
                console.log("Something went wrong.")
            }
        }
    }
}