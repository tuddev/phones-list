import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { loginStore } from '../../services';

type TProtectedRouteProps = {
  redirectPath?: string;
  children: React.ReactNode;
};

export const ProtectedRoute: React.FC<
React.PropsWithChildren<TProtectedRouteProps>
> = ({ redirectPath = '/login', children }) => {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    setIsLogged(loginStore.checkUserIsLogged());
  }, []);

  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
