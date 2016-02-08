import React, { Component, PropTypes} from 'react';
import {Grid} from 'react-mdl';
import {PortfolioCard} from './portfolioCard';
import { PortfolioItem } from './portfolioItem';
import { connect } from 'react-redux';

const styles = Object.freeze({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    }
});

class PortfolioGrid extends Component {
        // TODO for some reason the callback onClick do not work, i want the <PortfolioItem ref={call()} /> to be loaded on click.
    render(){
        return (
            <div style={styles.wrapper}>
            <PortfolioItem/>
                <Grid>
                    {this.props.portfolioCards.map(function(callback, i){
                        // TODO For some reason the callback on the OnClick does not work.
                            return (
                              <PortfolioCard key={i} card={callback} onClick={(callback) => <PortfolioItem ref={callback()}/>}  />
                            )
                        })
                    }
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
