import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';

const styles = Object.freeze({
    wrapper: {
        width: '80%',
        margin: 'auto'
    },
    cardTitle: Object.assign({
        height: 176,
        color: '#fff'
    }, cardStyles.cardTitle),
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});

export class PortfolioCard extends Component {
    render(){
        return (
            <div style={styles.wrapper}>
                <Card>
                    <CardTitle style={styles.cardTitle}>TODO: implement backend in firebase to load portfolios</CardTitle>
                    <CardText>
                        <div style={styles.cardRowTitle} >I will need data from firebase look something like:</div>

                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>imageUrl: </span>david.grenmyr@hotmail.com
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>text: </span>This project was a portfolio project to publish all my works in.
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>techniques: </span>[Javascript,React,Redux,Firebase]
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>techniques: </span>[Javascript,React,Redux,Firebase]
                        </div>
                        <div style={styles.cardRow}>
                            <span style={styles.cardRowTitle}>employer: </span> name: LNU, url: lnu.se, contact: david.waller@hismail.com
                        </div>

                    </CardText>
                </Card>
            </div>
        )
    }
}
