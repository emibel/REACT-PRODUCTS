import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import { CHILDREN } from 'constants/props';

import styles from './List.scss';

const propTypes = {
  children: CHILDREN,
  className: PropTypes.string,
}

const defaultProps = {
  children: [],
  className: null,
}

function List({children, className }) {
  return (
    <div className={classnames(styles.list, className)}>
      {children}
    </div>
  )
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
