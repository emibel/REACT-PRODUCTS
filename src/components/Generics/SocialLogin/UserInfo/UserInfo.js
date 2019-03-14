import React from 'react'

import { USER } from 'constants/props'

import styles from './UserInfo.scss';

const propTypes = {
  user: USER
}

const UserInfo = ({user}) => (
  <span className={styles['user-info']}>
    {user && user.fullName}
  </span>
)

UserInfo.propTypes = propTypes

export default UserInfo
