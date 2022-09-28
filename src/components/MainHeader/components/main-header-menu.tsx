import React from 'react';
import { DecktopMenu } from './decktop-menu';

type TMainHeaderMenuProps = {
  isMenuOpen: boolean;
  anchorEl: HTMLElement;
  setAnchorEl: (value: HTMLElement) => void;
};

export const MainHeaderMenu: React.FC<TMainHeaderMenuProps> = ({
  anchorEl,
  isMenuOpen,
  setAnchorEl,
}) => {

  return (
    <DecktopMenu
      anchorEl={anchorEl}
      isMenuOpen={isMenuOpen}
      menuId="primary-search-account-menu"
      setAnchorEl={setAnchorEl}
    />
  );
};
