import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CHILDREN } from 'constants/props';
import styles from './ListItem.scss';

const propTypes = {
  children: CHILDREN.isRequired,
  className: PropTypes.string
}

const defaultProps = {
  className: PropTypes.string
}

function ListItem({children, className}) {
  return (
    <div className={classnames(styles.item, className)}>
      {children}
    </div>
  )
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
