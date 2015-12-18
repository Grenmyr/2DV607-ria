import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    card: cardStyles.card,
    cardTitle: Object.assign({
        color: '#fff',
    }, cardStyles.cardTitle)
});

const Home = () => (
    <Card shadow={0} style={styles.card}>
        <CardTitle expand style={styles.cardTitle}>Welcome</CardTitle>
        <CardText>
            ...to my amazing homepage!
        </CardText>
    </Card>
);

export default Home;
