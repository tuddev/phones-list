import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthPage } from './AuthPage';
import { ContactsPage } from './ContactsPage';

export const AppPage = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/login" element={<AuthPage />}>
      </Route>
    </Routes>
  </BrowserRouter>;
};

