import React, { Component } from 'react';
import { Link }  from 'react-router';
import { connect } from 'react-redux';
import { Layout, Header, Navigation, Drawer, Content, Button, Card } from 'react-mdl';

const styles = Object.freeze({
    wrapper: {
        background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'
    },
    header: {
        color: 'white'
    }
});

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState,
        userState: state.userState
    }
};

export default class Home extends Component {

    render() {
        return (
            <div>
                <Layout style={styles.wrapper}>
                    <Header transparent title="Title" style={styles.header}>
                        <Navigation>
                            {this.props.loginState.isLoggedIn ? (
                                <Link to="/auth">Logout</Link>
                            ) : (
                                <Link to="/auth">Login</Link>
                            )}
                        </Navigation>
                    </Header>
                    <Drawer title="Content">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/auth">Login</Link>
                            <Link to="/about">About me</Link>
                            <Link to="/contact">Contact me</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/newcard">New portfolio Card</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);
