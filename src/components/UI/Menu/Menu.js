import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import classnames from 'classnames';
import {Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import {CHILDREN} from 'constants/props';

const propTypes = {
  className: PropTypes.string,
  toogleItem: CHILDREN.isRequired,
}
const defaultProps = {
  className: null,
}

const Menu = ({className, menuItems, toogleItem}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = event => {
    setOpen(false);
  };

  const handleClick = (e, item) => {
    item.handleClick();
    handleClose(e);
  }

  return (
    <div className={className}>
      <Button
        aria-owns={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {toogleItem}
      </Button>
      <Popper open={open} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  { menuItems.map(item => <MenuItem key={item.key} onClick={(e) => {handleClick(e,item)}}>{item.label}</MenuItem>) }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu
