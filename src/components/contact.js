import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    card: cardStyles.card,
    cardTitle: Object.assign({
        color: '#fff'
    }, cardStyles.cardTitle)
});

export const Contact = () => (
    <Card shadow={0} style={styles.card}>
        <CardTitle expand style={styles.cardTitle}>Contacts</CardTitle>
        <CardText>
            <ul>
                <li>
                    Email: david.grenmyr@hotmail.com
                </li>
                <li>
                    Phone: 070 259 6668
                </li>
                <li>
                    Skype: david.grenmyr
                </li>
            </ul>
        </CardText>
    </Card>
);
