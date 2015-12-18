import React, { Component, PropTypes} from 'react';
import { Button, Card, CardTitle, CardText } from 'react-mdl';
import { Link }  from 'react-router';
import { cardStyles } from '../../css/customStyles';

const styles = Object.freeze({
    card: cardStyles.card,
    button: {
        float: 'left'
    }
});

export const Logout = ({logout}) => (
    <div>
        <Card shadow={0} style={styles.card}>
            <CardText>
                <Link to='/'>
                    <Button accent style={styles.button}>
                        No I rather stay
                    </Button>
                </Link>
                <Button primary style={styles.button} onClick={logout}>
                    Logout
                </Button>
            </CardText>
        </Card>
    </div>
);

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};
