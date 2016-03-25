import React from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import {Link} from 'react-router';

const popupStyle = cardStyles.portfolioItemPopupWindow;
const customStyle = url => ({width:'100%',height:500,margin: 'auto', position: 'relative', background:url, zIndex: 6,backgroundPosition:'right bottom', backgroundRepeat:'no-repeat', backgroundColor:'white',backgroundSize:'400px'});

export const PortfolioItem = ({card}) => {
    const cardStyle = Object.assign(
        {titleSpan: {color: cardStyles.primaryColor, fontSize: '24px', fontWeight: '500'},
            cardActions: {height: '120px', background: cardStyles.accentColor},
            cardText: {
                fontWeight: 700,
                fontSize: '105%',
                textColor: cardStyles.accentColor
            },
            cardTitle: {color: cardStyles.primaryColor},
            span: {color: cardStyles.primaryColor, fontSize: '24px', fontWeight: '500'},},
        customStyle("url("+card.image+")")
    );

    return <div style={popupStyle}>
        <Card style={cardStyle}>
            <CardActions style={cardStyle.cardActions}>
                <CardTitle >
                    <span style={cardStyle.titleSpan}>{card.projectTitle}</span>
                </CardTitle>
            </CardActions>
            <CardText>
                <div style={cardStyle.cardRow}>

                    <span style={cardStyle.cardRowTitle}>Employer: </span>
                    <span style={cardStyle.cardText}>{card.employer}</span>
                </div>
                <div style={cardStyle.cardRow}>
                    <span style={cardStyle.cardRowTitle}>Employer url: </span>
                    <span style={cardStyle.cardText}>{card.employerUrl}</span>
                </div>
                <div style={cardStyle.cardRow}>
                    <span style={cardStyle.cardRowTitle}>Contact: </span>
                    <span style={cardStyle.cardText}>{card.employerContact}</span>
                </div>
                <div style={cardStyle.cardRow}>
                    <span style={cardStyle.cardRowTitle}>Description: </span>
                    <span style={cardStyle.cardText}>{card.text}</span>
                </div>
                <div style={cardStyle.cardRow}>
                    <span style={cardStyle.cardRowTitle}>Techniques: </span>
                    <span style={cardStyle.cardText}>{card.techniques}</span>
                </div>
            </CardText>
        </Card>
    </div>;
};

