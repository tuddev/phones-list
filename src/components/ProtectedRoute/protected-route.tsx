import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { loginStore } from '../../stores';

type TProtectedRouteProps = {
  redirectPath?: string;
  children: React.ReactNode;
};

export const ProtectedRoute: React.FC<
React.PropsWithChildren<TProtectedRouteProps>
> = ({ redirectPath = '/login', children }) => {
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged, 'asdasda');
  useEffect(() => {
    loginStore
      .checkUserIsLogged()
      .then((isUserLogged: boolean) => {
        console.log(isUserLogged);
        setIsLogged(isUserLogged);
      })
      .catch(() => setIsLogged(false));
  }, []);

  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
