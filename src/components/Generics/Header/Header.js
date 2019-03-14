import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Main from 'UI/Main';
import UserInfo from 'containers/UserInfo';
// import SocialLogin from 'containers/SocialLogin';

import logo from 'assets/logo.svg';

import styles from './Header.scss';

const propTypes = {};
const defaultProps = {};

const Header = () => (
  <Main className={styles.header}>
    <AppBar position="static">
      <Toolbar className={styles['tool-bar']}>
        <img src={logo} className={styles["title-logo"]} alt="logo" />
        <Typography variant="h6" color="inherit" className={styles.grow}>
          Products
        </Typography>
        <UserInfo />
        {/* <SocialLogin/> */}
      </Toolbar>
    </AppBar>
  </Main>
)

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
