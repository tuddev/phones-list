import React from "react";
import { AuthorisationPage } from "../AuthorisationPage";
import { ContactsPage } from "../ContactsPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export function App() {
  return  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/login" element={<AuthorisationPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
}
