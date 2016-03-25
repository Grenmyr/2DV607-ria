import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    card: {
        width: '90%',
        height: 400,
        maxWidth:500
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
            <CardTitle expand style={styles.cardTitle}>Om mig</CardTitle>
            <CardText style={styles.cardText}>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}> Jag är 33 år gammal, gift och två barn, fyra och sju år gamla.</span>
                    </div>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Inom programmering utvecklar jag gärna både på backend och frontend. Mina favorit miljöer är .NET med C# och
                        Javascript med Node som backend och React +Redux/Flux frontend.</span>
                    </div>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Mitt stora fritidsintresse är att odla i mitt trädgårdsland. Jordgubbar, Sparris och Spenat tillhör favoriterna.</span>
                    </div>
            </CardText>
        </Card>
    </div>
);
