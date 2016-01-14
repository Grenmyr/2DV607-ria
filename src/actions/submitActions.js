/**
 * Created by dav on 2016-01-13.
 */
export default {
    submit(portfolioCard) {
        return async (dispatch) => {
            dispatch({type: 'START_SPINNER'});
            console.log("In submitActions not implemented");
            let submit = await notImplementedFunction(portfolioCard);
            if (submit.isSuccessful) {
                dispatch({type: 'SUBMIT_PORTFOLIO_CARD'});
            } else {
                console.log("Something went wrong.")
            }
        }
    }
}