import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types'
import {Avatar, Typography} from '@material-ui/core';

import {SESSION} from 'constants/props'

import styles from './UserInfo.scss';
import Menu from 'UI/Menu/Menu';

const propTypes = {
  className: PropTypes.string,
  session: SESSION,
  signOut: PropTypes.func.isRequired
};

const defaultProps = {
  className: null,
};

const UserInfo = ({className, session, signOut}) => {

  const getToggleItem = () =>
    <div className={classnames(styles['login-container'], className)}>
      <Avatar alt={session.displayName} src={session.photo} className={styles.avatar} />
      <Typography variant="h6" color='inherit'> {session.displayName} </Typography>
    </div>

  const getMenuItems = () => {
    return [
      {
        label: 'Profile',
        key: 'userInfo_profile',
        handleClick:  () => { alert('Profile clicked')},
      },
      {
        label: 'Logout',
        key: 'userInfo_logout',
        handleClick: signOut,
      },
    ]
  }

  return (
    session &&
      <Menu
        className={classnames(styles['login-container'], className)}
        toogleItem={getToggleItem()}
        menuItems={getMenuItems()}
      />
  )
};

UserInfo.propTypes = propTypes;
UserInfo.defaultProps = defaultProps;

export default UserInfo;
