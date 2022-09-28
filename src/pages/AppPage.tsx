import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../components';
import { loginService } from '../services';
import { AuthPage } from './AuthPage';
import { ContactsPage } from './ContactsPage';
import { SignUpPage } from './SignUpPage';

export const AppPage = () => {
  useLayoutEffect(() => {
    loginService.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ContactsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
