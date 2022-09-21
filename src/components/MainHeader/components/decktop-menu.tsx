import React from 'react';
import { Menu, MenuItem } from '@mui/material';

export type TDesktopMenuProps = {
  isMenuOpen: boolean;
  anchorEl: HTMLElement;
  menuId: string;
  setAnchorEl: (value: HTMLElement)  => void;
  onClose: () => void;
};

export const DecktopMenu: React.FC<TDesktopMenuProps> = ({
  anchorEl,
  isMenuOpen,
  menuId,
  setAnchorEl,
  onClose,
}) => {
  const handleMenuClose = () => {
    setAnchorEl(null);
    onClose();
  };
  
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};