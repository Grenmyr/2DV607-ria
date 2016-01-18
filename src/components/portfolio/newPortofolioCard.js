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

    render() {
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
                                <input id="inputFileToLoad" type="file" ref="image"/>
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
        submit(submitAction) {
            console.log(submitAction);
            const portfolioCard = {
                projectTitle: submitAction.projectTitle.refs.input.value,
                text: submitAction.text.refs.input.value,
                techniques: submitAction.techniques.refs.input.value,
                employer: submitAction.employer.refs.input.value,
                employerContact: submitAction.employerContact.refs.input.value,
                employerUrl: submitAction.employerUrl.refs.input.value,
                image: submitAction.image.files[0]
            };
            dispatch(submitActions.submit(portfolioCard))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPortfolioCard);
