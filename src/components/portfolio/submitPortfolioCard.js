/**
 * Created by dav on 2016-01-13.
 */
import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardTitle } from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import { connect } from 'react-redux';
import submitActions from '../../actions/submitActions'

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

class SubmitPortfolioCard extends Component {

    render(){
        return (
            <div style={styles.wrapper}>
                    <Card>
                        <CardTitle style={styles.cardTitle}>{this.props.portfolioCard.imageUrl}</CardTitle>
                        <CardText>
                            <div style={styles.cardRowTitle} >{this.props.portfolioCard.projectTitle}</div>
                            <div style={styles.cardRow}>
                                <span style={styles.cardRowTitle}>Description: </span>{this.props.portfolioCard.text}
                            </div>
                            <div style={styles.cardRow}>
                                <span style={styles.cardRowTitle}>Techniques used: </span>{this.props.portfolioCard.techniques}
                            </div>
                            <div style={styles.cardRow}>
                                <span style={styles.cardRowTitle}>Employer: </span>{this.props.portfolioCard.employer}
                            </div>
                            <div style={styles.cardRow}>
                                <span style={styles.cardRowTitle}>Employer contact: </span>{this.props.portfolioCard.employerContact}
                            </div>
                            <div style={styles.cardRow}>
                                <span style={styles.cardRowTitle}>Link to employer: </span>{this.props.portfolioCard.employerUrl}
                            </div>
                        </CardText>
                    </Card>
            </div>
        )
    }
}

SubmitPortfolioCard.propTypes = {
    submit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState,
        portfolioCard: state.portfolioCard
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit(portfolioCard) {
            dispatch(submitActions.submit(portfolioCard))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubmitPortfolioCard);
