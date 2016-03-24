import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { cardStyles } from '../css/customStyles';

const styles = Object.freeze({
    maxWidth: 500,
    card: {
        width: '90%',
        height: 300
    },
    cardText: cardStyles.sharedCardStyle.cardText,
    cardActions: Object.assign({
        background: `url(https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAVSAAAAJGZlZDJkNWEzLWI4MmItNDZiMC05ZDlhLThiYzAyMGJlYTRmNQ.jpg)
         right no-repeat #46B6AC`,
        backgroundColor: cardStyles.accentColor,
        height: 100
    }) ,
    cardTitle: Object.assign({
        color: cardStyles.sharedCardStyle.cardTitle.color
    }),
    cardRow: cardStyles.cardRow,
    cardRowTitle: cardStyles.cardRowTitle
});

const wrapper = {
    display: 'flex',
    justifyContent: 'center'
};


export const Contact = () => (
    <div style={wrapper}>
            <Card shadow={0} style={styles.card}>
                <CardActions style={styles.cardActions}>
                <CardTitle expand style={styles.cardTitle}>Contact me</CardTitle>
                </CardActions>
                <CardText style={styles.cardText}>

                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Email: </span>david.grenmyr@hotmail.com
                    </div>

                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Phone: </span> 070 259 6668
                    </div>

                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Skype: </span> david.grenmyr
                    </div>

                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Github: </span> <a target="_blank" href="https://github.com/Grenmyr">Min Github profil</a>
                    </div>
                    <div style={styles.cardRow}>
                        <span style={styles.cardRowTitle}>Github: </span> <a target="_blank" href="https://www.linkedin.com/in/david-grenmyr-6a4129102">Min LinkedIn profil</a>
                    </div>
                </CardText>
            </Card>
    </div>
);
