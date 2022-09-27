import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { contactsService, loginStore } from '../../services';
import { ContactItem } from '../ContactItem';


export const ContactsList: React.FC = () => {
  useEffect(() => {
    contactsService.init(loginStore.getUser().id);
  }, []);
  
  return (
    <Container>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
    </Container>
  );
};

observer(ContactsList);
