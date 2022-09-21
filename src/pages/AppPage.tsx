import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthPage } from './AuthPage';
import { ContactsPage } from './ContactsPage';
import { SignUpPage } from './SignUpPage';

export const AppPage = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>;
};

