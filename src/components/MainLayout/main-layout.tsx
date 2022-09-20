import { observer } from 'mobx-react-lite';
import React from 'react';
import { ContainerContent } from '../ContainerContent';
import { MainHeader } from '../MainHeader';

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#CAE1FF' }}>
      <MainHeader />
      <ContainerContent>{children}</ContainerContent>
    </div>
  );
};

observer(MainLayout);
