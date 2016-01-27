import Firebase from 'firebase';
export class FireBaseRepository{

    // Static methods are called without instantiating their class.
    static auth (user){
        return new Promise((resolve, reject) => {
            FireBaseRef.authWithPassword({
                email: user.email,
                password: user.password
            }, (error, data) => {
                if (error) {
                    resolve({data: error, isSuccessful: false});
                }
                resolve({data, isSuccessful: true});
            });
        });
    }

    static submitPortfolio (portfolioCard) {
        const fireBaseRef = new Firebase('portfoliodavidg.firebaseIO.com/' + 'portfolio/');
        fireBaseRef.push(portfolioCard);
    }
}

export const FireBaseRef = new Firebase('portfoliodavidg.firebaseIO.com');
