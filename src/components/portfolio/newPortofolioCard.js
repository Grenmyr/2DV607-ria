/**
 * Created by dav on 2016-01-13.
 */
import React, { Component, PropTypes } from 'react';
import { cardStyles } from '../../css/customStyles';
import { connect } from 'react-redux';
import submitActions from '../../actions/submitActions'
import {Textfield,Button,Card,CardTitle,CardText,CardActions} from 'react-mdl';
import { Link }  from 'react-router';

const styles = Object.freeze({
    bigCard: cardStyles.bigCard,
    smallCard: cardStyles.smallCard,
    cardTitle: Object.assign({
        color: '#fff'
    }, cardStyles.cardTitle),
    textField: {
        width: 400
    }
});



class NewPortfolioCard extends Component {

    submit () {
        const portfolioCard = {
            projectTitle: this.refs.projectTitle.refs.input.value,
            text: this.refs.text.refs.input.value,
            techniques: this.refs.techniques.refs.input.value,
            employer: this.refs.employer.refs.input.value,
            employerContact: this.refs.employerContact.refs.input.value,
            employerUrl: this.refs.employerUrl.refs.input.value
        };
            this.props.submit(portfolioCard);
    }

    render(){
        return (
            <div style={styles.wrapper}>
                {this.props.loginState.isLoggedIn ? (
                    <Card shadow={0} style={styles.bigCard}>

                        <CardTitle style={styles.cardTitle}>New PortfolioCard</CardTitle>
                        <CardText>
                            <form onSubmit={(e) => {
                            e.preventDefault();
                            this.props.submit(this.refs)
                          }}>
                                <Textfield
                                    onChange={() => {}}
                                    label={this.props.portfolioCard.projectTitle}
                                    style={styles.textField}
                                    ref="projectTitle"
                                />
                                <Textfield
                                    onChange={() => {}}
                                    label={this.props.portfolioCard.text}
                                    style={styles.textField}
                                    ref="text"
                                />
                                <Textfield
                                    onChange={() => {}}
                                    label={this.props.portfolioCard.techniques}
                                    style={styles.textField}
                                    ref="techniques"
                                />
                                <Textfield
                                    onChange={() => {}}
                                    label={this.props.portfolioCard.employer}
                                    style={styles.textField}
                                    ref="employer"
                                />
                                <Textfield
                                    onChange={() => {}}
                                    label={this.props.portfolioCard.employerContact}
                                    style={styles.textField}
                                    ref="employerContact"
                                />
                                <Textfield
                                    onChange={() => {}}
                                    label={this.props.portfolioCard.employerUrl}
                                    style={styles.textField}
                                    ref="employerUrl"
                                />
                                <Button>Todo implement image Load</Button>
                                <Button type="submit">Post Card</Button>

                            </form>

                        </CardText>
                    </Card>
                ) : (
                    <Card shadow={0} style={styles.smallCard}>
                        <CardTitle style={styles.cardTitle}>Access Denied</CardTitle>
                        <CardText>You need to be logged in to create new Portfolio Cards</CardText>
                        <Button><Link to="/auth">Log in</Link></Button>
                    </Card>
                )}

            </div>
        )
    }
}

NewPortfolioCard.propTypes = {
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
            console.log(this.refs);
            console.log(portfolioCard);
            dispatch(submitActions.submit(portfolioCard))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NewPortfolioCard);
