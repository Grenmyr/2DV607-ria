import React, { Component, PropTypes} from 'react';
import {
    Textfield,
    Button,
    Card,
    CardTitle,
    CardText,
    CardActions
} from 'react-mdl';

const styles = Object.freeze({
    card: {
        width: 320,
        height: 320,
        margin: 'auto'
    },
    cardTitle: {
        background: `url(http://www.getmdl.io/assets/demos/dog.png)
                        bottom right 15% no-repeat #46B6AC`,
        color: 'Black'
    },
    textField: {
        width: 200
    }
})

export class Login extends Component {

    render() {
        return (
            <div>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand
                               style={styles.cardTitle}>Email:fake@fakemail.com,
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
