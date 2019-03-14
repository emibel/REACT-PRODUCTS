import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react'

import styles from './Main.scss';

const propTypes = {
  className: PropTypes.string
}

const defaultProps = {
  className: null
}

const Main = ({ children, className }) => (
  <div className={classnames(styles.main, className)}>
    {children}
  </div>
)

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main
