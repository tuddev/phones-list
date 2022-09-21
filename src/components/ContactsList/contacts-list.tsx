import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ContactItem } from '../ContactItem';

export const ContactsList: React.FC = () => {
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
