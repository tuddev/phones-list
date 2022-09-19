import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem, IconButton, Badge } from '@mui/material';

export type TMobileMenuProps = {
  mobileMoreAnchorEl: HTMLElement;
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export const MobileMenu: React.FC<TMobileMenuProps> = ({
  handleMobileMenuClose,
  handleProfileMenuOpen,
  isMobileMenuOpen,
  mobileMenuId,
  mobileMoreAnchorEl,
}) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};
