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
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                {this.state.cardToShow && <PortfolioItem card={this.state.cardToShow}/>}
                <div style={styles.wrapper}>
                <Grid>
                    {this.props.portfolioCards.map((card, i) => {
                            return (
                              <PortfolioCard key={i} card={card} onClick={() => {
                                this.setState({
                                    cardToShow: card
                                })
                              }}  />
                            )
                        })
                    }
                </Grid>
                </div>
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
