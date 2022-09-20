import React from 'react';
import { DecktopMenu } from './decktop-menu';
import { MobileMenu } from './mobile-menu';

type TMainHeaderMenuProps = {
  isMenuOpen: boolean;
  anchorEl: HTMLElement;
  setAnchorEl: (value: HTMLElement)  => void;
  mobileMoreAnchorEl: HTMLElement;
  isMobileMenuOpen: boolean;
  onClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export const MainHeaderMenu: React.FC<TMainHeaderMenuProps> = ({
  anchorEl,
  onClose,
  handleProfileMenuOpen,
  isMenuOpen,
  isMobileMenuOpen,
  mobileMoreAnchorEl,
  setAnchorEl,
}) => {
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <>
      <DecktopMenu
        anchorEl={anchorEl}
        onClose={onClose}
        isMenuOpen={isMenuOpen}
        menuId={menuId}
        setAnchorEl={setAnchorEl}
      />
      <MobileMenu
        onClose={onClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
      />
    </>
  );
};
