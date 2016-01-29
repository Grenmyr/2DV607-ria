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
        return (
            <div style={styles.wrapper}>
                <Grid>
                    {console.log("i render",this.props.portfolioCards)}
                    <PortfolioCard this/>
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
