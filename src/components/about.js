import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';


const styles = Object.freeze({
    card: cardStyles.card,
    cardTitle: Object.assign({
        alignItems: 'flex-start',
        color: '#fff'
    }, cardStyles.cardTitle),
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});

export const About = () => (
    <Card shadow={0} style={styles.card}>
        <CardTitle expand style={styles.cardTitle}>About David
            Grenmyr</CardTitle>
        <CardText>
                <div style={styles.cardRow}>
                    <span style={styles.cardRowTitle}>Social: </span> I am 33 years old blessed with a lovely wife and 2 children 4 and 7 years old.
                </div>
                <div style={styles.cardRow}>
                    <span style={styles.cardRowTitle}>Interests: </span>  Programming both backend and frontend. My favorite environments are .NET with C# and
                    Javascript with Node or React.
                </div>
                <div style={styles.cardRow}>
                    <span style={styles.cardRowTitle}>Hobbies: </span>  Gardening, especially growing vegetables, berries and fruits.
                </div>
        </CardText>
    </Card>
);
