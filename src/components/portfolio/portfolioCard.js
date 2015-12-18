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
    }, cardStyles.cardTitle)
});

export class PortfolioCard extends Component {
    render(){
        return (
            <div style={styles.wrapper}>
                <Card>
                    <CardTitle style={styles.cardTitle}>TODO: implement backend in firebase to load portfolios</CardTitle>
                    <CardText>
                        I will need data from firebase look something like:
                        <ul>
                            Object start
                            <li>
                                imageUrl : url/to/image,
                            </li>
                            <li>
                                text: EX: This project was a portfolio project to publish all my works in.,
                            </li>
                            <li>
                                techniques: [Javascript,React,Redux,Firebase],
                            </li>
                            <li>
                                employer:
                                    name: LNU,
                                    url: lnu.se
                                    contact: david.waller@hismail.com
                            </li>
                            Object end
                        </ul>
                    </CardText>
                </Card>
            </div>
        )
    }
}
