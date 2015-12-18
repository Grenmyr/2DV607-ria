import React, {Component} from 'react'
import {Grid} from 'react-mdl'
import PortfolioCells from './portfolioCells'

const styles = Object.freeze({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 auto',
    }
});

export class PortfolioGrid extends Component {
    render(){
        return (
            <div style={styles.wrapper}>
                <Grid>
                    <PortfolioCells/>
                    <PortfolioCells/>
                    <PortfolioCells/>
                </Grid>
            </div>
        )
    }
}
