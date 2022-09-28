import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { loginService } from '../../../services';
import { useNavigate } from 'react-router-dom';

export type TDesktopMenuProps = {
  isMenuOpen: boolean;
  anchorEl: HTMLElement;
  menuId: string;
  setAnchorEl: (value: HTMLElement)  => void;
};

export const DecktopMenu: React.FC<TDesktopMenuProps> = ({
  anchorEl,
  isMenuOpen,
  menuId,
  setAnchorEl,
}) => {
  const navigate = useNavigate();

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    loginService.logout();
    navigate('/login');
    handleMenuClose();
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
      <MenuItem onClick={handleLogoutClick}>Выйти</MenuItem>
    </Menu>
  );
};
