import { observer } from 'mobx-react';
import React from 'react';
import { MainLayout } from '../MainLayout';
import { ContactsList } from './components/ContactsList';

export const ContactsPage: React.FC = () => {
  return <MainLayout>
    <ContactsList />
  </MainLayout>
}

observer(ContactsPage)