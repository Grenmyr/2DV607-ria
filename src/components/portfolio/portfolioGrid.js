import React, { Component, PropTypes} from 'react';
import {Grid} from 'react-mdl';
import {PortfolioCard} from './portfolioCard';
import { connect } from 'react-redux';

const styles = Object.freeze({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    }
});

class PortfolioGrid extends Component {

    render(){
        return (
            <div style={styles.wrapper}>
                <Grid>
                    { this.props.portfolioCards.map(function(callback, i){
                        return <PortfolioCard key={i} card={callback}/>
                })}
                </Grid>
            </div>
        )
    }
}

PortfolioGrid.propTypes = {
    portfolioCards: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        portfolioCards: state.portfolioCards
    }
};

export default connect(mapStateToProps)(PortfolioGrid)
