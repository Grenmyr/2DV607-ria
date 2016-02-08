import React from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import {Link} from 'react-router';

const styles = cardStyles.standardSingleCard;

export const PortfolioItem = ({click}) => (

    <Card styles={styles.card}>
        <CardTitle styles={styles.cardTitle}>
            {console.log(click)}
            <h1>todo implement view that listen on clicks of cards ?? </h1>
        </CardTitle>
    </Card>
);

