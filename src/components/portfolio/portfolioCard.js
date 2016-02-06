import React from 'react'
// why do i need this import of React ?
import { Card, CardText, CardTitle } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import { connect } from 'react-redux';
import { PortfolioItem } from './portfolioItem';

const styles = Object.assign({
    wrapper: {
        padding: '15px'
    },
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});



export const PortfolioCard = ({card}) => (
            <div style={styles.wrapper} onClick={()=> console.log("click")}>
                <Card>
                    <CardTitle style={{color:'#fff',height:'176',background : "url("+card.image+")"}}>{card.projectTitle}</CardTitle>
                    <CardText>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>Employer: </span>{card.employer}
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>Employer url: </span>{card.employerUrl}
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>Contact: </span>{card.employerContact}
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>Description: </span>{card.text}
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>Techniques: </span>{card.techniques}
                        </div>
                    </CardText>
                </Card>
            </div>
);
