import { observer } from 'mobx-react';
import React from 'react';
import { MainLayout, ContactsList } from '../components';

export const ContactsPage: React.FC = () => {
  return <MainLayout>
    <ContactsList />
  </MainLayout>
}

observer(ContactsPage)