import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';
import {Link} from 'react-router';

const styles = Object.freeze({
    cardActions: {height: '120px', background: cardStyles.colors.accentColor},
    card: cardStyles.homeViewCard,
    cardTitle: Object.assign({
        color: '#fff'
    }),
    span: {color: cardStyles.colors.primaryColor, fontSize: '24px', fontWeight: '500'},
    cardText : cardStyles.cardText
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
            <span style={styles.cardText}>
                Hejsan! Jag heter David Grenmyr och detta är min portfolio.
                Istället för skicka tråkiga personliga brev via epost så har jag gjort en liten portfoliosida.
            </span>
        </CardText>
        <CardText>
            <span style={styles.cardText}>
                Sidan är gjord i React med hjälp av Redux för hantera states.En hel del javascript är skriven med ES2015 och ES2016. All styling är en kombination av native CSS och react-mdl.
                Som backend för hantera autensiering och persitent lagring av mina tidigare erfarenheter (portfoliokort) har jag använt Firebase.
            </span>
        </CardText>
        <CardText>
            <Link to="/portfolio">
                <Button>Till portfolio</Button>
            </Link>
            <Link to="/about">
                <Button>Om mig</Button>
            </Link>
            <Link to="/contact">
                <Button>Kontakta mig</Button>
            </Link>
        </CardText>
    </Card>
);

export default Home;
