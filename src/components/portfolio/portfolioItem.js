import React from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import {Link} from 'react-router';

const popupStyle = cardStyles.portfolioItemPopupWindow;
const customStyle = {width: '100%', height: 500, position: 'relative', background: (url)=> url};
const cardStyle = Object.assign(
    cardStyles.sharedCardStyle,
    customStyle
);

export const PortfolioItem = ({card}) => (
<div style = {popupStyle}>
    {cardStyle.background("url("+card.image+")")}
    <Card style={cardStyle}>
        <CardActions style={cardStyle.cardActions}>
            <CardTitle >
                <span style={cardStyle.titleSpan}>{card.projectTitle}</span>
            </CardTitle>
        </CardActions>
        <CardText>
            <div style={cardStyle.cardRow}>
                <span style={cardStyle.cardRowTitle}>Employer: </span>{card.employer}
            </div>
            <div style={cardStyle.cardRow}>
                <span style={cardStyle.cardRowTitle}>Employer url: </span>{card.employerUrl}
            </div>
            <div style={cardStyle.cardRow}>
                <span style={cardStyle.cardRowTitle}>Contact: </span>{card.employerContact}
            </div>
            <div style={cardStyle.cardRow}>
                <span style={cardStyle.cardRowTitle}>Description: </span>{card.text}
            </div>
            <div style={cardStyle.cardRow}>
                <span style={cardStyle.cardRowTitle}>Techniques: </span>{card.techniques}
            </div>
        </CardText>
    </Card>
</div>
);

