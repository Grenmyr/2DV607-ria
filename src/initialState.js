/**
 * initialState.js Created by dav on 2015-11-16.
 */
export default () => {
    return {
        loginState: {isLoggedIn: false},
        userState: {
            email: "youAreNotLoggedIn@clulesss.com",
            password: "secret"
        },
        spinner: {
            spinning: false
        },
        portfolioCard: {
            projectTitle: "No title submitted.",
            imageUrl: "No Image available.",
            text: "No text describing project was submitted",
            techniques: "Techniques used is not specified.",
            employer: "Employer name unknown.",
            employerUrl: "Url to employer is unknown.",
            employerContact: "Contact was not submitted."
        }
    }
};
