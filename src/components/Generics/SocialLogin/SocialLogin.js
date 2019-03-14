import React from 'react';
import LoginGoogle from 'containers/LoginGoogle';
import LoginFacebook from 'containers/LoginFacebook';
import UserInfo from 'containers/UserInfo';

import styles from './SocialLogin.scss';

const SocialLogin = () => (
  <div className={styles.login}>
    <UserInfo />
    <LoginGoogle />
    <LoginFacebook />
  </div>

)
export default SocialLogin
