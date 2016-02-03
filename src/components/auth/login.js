import React, { Component, PropTypes} from 'react';
import {
    Textfield,
    Button,
    Card,
    CardTitle,
    CardText,
    CardActions
} from 'react-mdl';
import { cardStyles } from '../../css/customStyles';
import Spinner from '../spinner';

const styles = Object.freeze({
    card: cardStyles.singleCard,
    cardTitle: Object.assign({
        color: '#fff'
    }, cardStyles.cardTitle),
    textField: {
        width: 200
    }
});

export class Login extends Component {

    render() {
        return (
            <div>
                <Card shadow={0} style={styles.card}>
                    <Spinner/>
                    <CardTitle expand style={styles.cardTitle}>Email:fake@fakemail.com,
                        Hint: Pass: 123</CardTitle>
                    <CardText>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.props.loginOnSubmit(this.refs)
                          }}>
                            <Textfield
                                onChange={() => {}}
                                label="Email..."
                                style={styles.textField}
                                ref="email"
                            />
                            <Textfield
                                onChange={() => {}}
                                label="Password..."
                                style={styles.textField}
                                ref="password"
                            />
                            <Button type="submit">Login</Button>
                        </form>
                    </CardText>
                </Card>
            </div>
        )
    }
}

Login.propTypes = {
    loginOnSubmit: PropTypes.func.isRequired
};
