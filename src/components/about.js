import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    card: cardStyles.card,
    cardTitle: Object.assign({
        alignItems: 'flex-start',
        color: '#fff'
    }, cardStyles.cardTitle)
});

export const About = () => (
    <Card shadow={0} style={styles.card}>
        <CardTitle expand style={styles.cardTitle}>David
            Grenmyr</CardTitle>
        <CardText>
            <ul>
                <li>
                    Social: I am 33 years old blessed with a lovely wife and 2 children 4 and 7 years old.
                </li>
                <li>
                    Interests: Programming both backend and frontend. My favorite environments are .NET with C# and
                    Javascript with Node or React.
                </li>
                <li>
                    Hobbies: Gardening, especially growing vegetables, berries and fruits.
                </li>
            </ul>
        </CardText>
    </Card>
);
