import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import facebookIcon from 'assets/facebookLogo.png';
import { USER } from 'constants/props';

import styles from './LoginFacebook.scss';

const propTypes = {
  user: USER
}

const defaultProps = {
  user: null
}

class LoginFacebook extends Component {

  loginSuccess(response) {
    this.props.addFacebookUser(response);
  }

  logout() {
    this.props.removeUser();
  }

  render() {
    const { user } = this.props;

    if (user) {
      return (user.type === 'FACEBOOK' &&
      <button
        onClick={() => this.logout()}
        className={styles['button-logout']}
      >
        <img src={facebookIcon} className={styles['facebook-icon']} alt="Facebook logout"/>
        Logout
      </button>
      )
    }
    else {
      return (
        <FacebookLogin
          appId="824021427936078"
          callback={response => this.loginSuccess(response)}
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              className={styles.button}
            >
              <img src={facebookIcon} className={styles['facebook-icon']} alt="Facebook login" />
              Login
            </button>
          )}
        />
      )
    }
  }
}

LoginFacebook.propTypes = propTypes;
LoginFacebook.defaultProps = defaultProps;

export default LoginFacebook;
