import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';


/*const styles = Object.freeze({
    card: cardStyles.card,
    cardTitle: Object.assign({
        alignItems: 'flex-start',
        color: '#fff'
    }, cardStyles.cardTitle),
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});*/

const styles = Object.freeze({
    card: {
        width: '90%',
        height: 400
    },
    cardText: cardStyles.sharedCardStyle.cardText,
    cardTitle: Object.assign({
        color: cardStyles.sharedCardStyle.cardTitle.color
    }, cardStyles.contactBackground),
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});

const wrapper = {
    display: 'flex',
    justifyContent: 'center'
};

export const About = () => (
    <div style={wrapper}>
        <Card shadow={0} style={styles.card}>
            <CardTitle expand style={styles.cardTitle}>About me</CardTitle>
            <CardText style={styles.cardText}>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Profile: </span> Jag är 33 år gammal, gift och två barn, fyra och sju år gamla.
                    </div>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Professional interests: </span> Programmering både backend och  frontend. Mina favorit miljöer är .NET med C# och
                        Javascript med Node som backend och React +Redux/Flux frontend.
                    </div>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Unprofessional interests: </span>  Gräva i mitt trädgårdsland, skörda jordgubbar, odla fantastisk spenat, plocka hallon och plocka goda frukter.
                    </div>
            </CardText>
        </Card>
    </div>
);
