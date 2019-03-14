import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import styles from './LoginGoogle.scss';
import googleIcon from 'assets/googleLogo.png';
import { USER } from 'constants/props';

const propTypes = {
  user: USER
}

const defaultProps = {
  user: null
}

class LoginGoogle extends Component {

  loginSuccess(response) {
    console.log(response);
    this.props.addGoogleUser(response);
  }

  logout() {
    this.props.removeUser();
  }

  render() {

    const { user } = this.props;

    if( user ) {
      return (user.type === 'GOOGLE' &&
      <button className={styles['button-logout']} onClick={() => this.logout()}>
        <img src={googleIcon} className={styles['google-icon']} alt="Google logout"/>
        Logout
      </button>
      )
    }
    else {
      return (
        <GoogleLogin
          clientId="104992594558-mjv43fge4m0457pf3dqdc8teqau2bt81.apps.googleusercontent.com"
          buttonText="Login"
          autoLoad
          onSuccess={response => this.loginSuccess(response)}
          onFailure={() => {this.props.removeUser()}}
          className={styles.button}
        />
      )
    }
  }
}

LoginGoogle.propTypes = propTypes;
LoginGoogle.defaultProps = defaultProps;

export default LoginGoogle;
