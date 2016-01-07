import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    card: cardStyles.card,
    cardTitle: Object.assign({
        color: '#fff'
    }, cardStyles.cardTitle),
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});

export const Contact = () => (
    <Card shadow={0} style={styles.card}>
        <CardTitle expand style={styles.cardTitle}>Contacts</CardTitle>
        <CardText>

            <div style={styles.cardRow}>
                <span style={styles.cardRowTitle}>Email: </span>david.grenmyr@hotmail.com
            </div>

            <div style={styles.cardRow}>
                <span style={styles.cardRowTitle}>Phone: </span> 070 259 6668
            </div>

            <div style={styles.cardRow}>
                <span style={styles.cardRowTitle}>Skype: </span> david.grenmyr
            </div>

        </CardText>
    </Card>
);
