import React from 'react';
import { Card, CardText, CardTitle } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import { connect } from 'react-redux';
import { PortfolioItem } from './portfolioItem';

const portfolioImage = url => ({color: '#fff', height: '176', background: url});

export const PortfolioCard = ({card, onClick}) => {
    const styles = Object.assign({
        wrapper: {
            padding: '15px'
        },
        cardRow: cardStyles.cardRow,
        cardRowTitle: cardStyles.cardRowTitle,
        cardTitle: portfolioImage("url(" + card.image + ")")
    });

    return <div style={styles.wrapper} onClick={onClick}>
        <Card>
            <CardTitle
                style={styles.cardTitle}>{card.projectTitle}</CardTitle>
        </Card>
    </div>
};
