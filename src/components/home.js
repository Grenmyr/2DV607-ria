import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    cardActions: {height: '120px', background: cardStyles.colors.accentColor},
    card: cardStyles.homeViewCard,
    cardTitle: Object.assign({
        color: '#fff'
    }),
    span: {color: '#fff', fontSize: '24px', fontWeight: '500'}
});

const Home = () => (
    <Card shadow={0} style={styles.card}>
        <CardActions style={styles.cardActions}>
            <CardTitle style={styles.cardTitle}>
                 <span style={styles.span}>
                    Välkommen till min portfolio!
                 </span>
            </CardTitle>
        </CardActions>
        <CardText>
            Hejsan! Jag heter David Grenmyr och detta är min portfolio.
            Istället för skicka tråkiga personliga brev via epost så har jag gjort en liten portfoliosida.

        </CardText>
        <CardText>
            Sidan är gjord i React med hjälp av Redux för hantera states.En hel javascript är skriven med ES2015 och ES2016 och CSS är en kombination av native och react-mdl.
            Som backend för hantera autensiering och persitent lagring av mina tidigare erfarenheter (portfoliokort) har jag använt Firebase.
       </CardText>
    </Card>
);

export default Home;
