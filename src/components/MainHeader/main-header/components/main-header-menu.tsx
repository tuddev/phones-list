import React from 'react';
import { DecktopMenu, TDesktopMenuProps } from './decktop-menu';
import { MobileMenu, TMobileMenuProps } from './mobile-menu';

export const MainHeaderMenu: React.FC<TDesktopMenuProps & TMobileMenuProps> = ({
  anchorEl,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  isMenuOpen,
  isMobileMenuOpen,
  menuId,
  mobileMenuId,
  mobileMoreAnchorEl,
  setAnchorEl,
}) => {
  return (
    <>
      <DecktopMenu
        anchorEl={anchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        isMenuOpen={isMenuOpen}
        menuId={menuId}
        setAnchorEl={setAnchorEl}
      />
      <MobileMenu
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
      />
    </>
  );
};
