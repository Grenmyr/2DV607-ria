import React, {Component, PropTypes} from 'react';
import {Grid} from 'react-mdl';
import {PortfolioCard} from './portfolioCard';
import { connect } from 'react-redux';

const styles = Object.freeze({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 auto'
    }
});

class PortfolioGrid extends Component {
    render(){
        console.log("portfolioGrid",this.props.portfolioCards);
        return (
            <div style={styles.wrapper}>
                <Grid>
                    <PortfolioCard/>
                </Grid>
            </div>
        )
    }
}

PortfolioCard.propTypes = {
    portfolioCards: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        portfolioCards: state.portfolioCards
    }
};

export default connect(mapStateToProps)(PortfolioGrid)
