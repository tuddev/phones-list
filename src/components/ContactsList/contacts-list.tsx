import { Container, List } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ContactModel, contactsService, loginStore } from '../../services';
import { contactsStore } from '../../stores';
import { ContactItem } from '../ContactItem';


export const ContactsList: React.FC = observer(() => {
  useEffect(() => {
    contactsService.init(loginStore.getUser()?.id);
    contactsStore.init();
  }, []);
  
  return (
    <Container>
      <List>
        {
          contactsStore.contacts.map((contact: ContactModel) => (
            <ContactItem key={contact.id} contact={contact}/>
          ))
        }
      </List>
    </Container>
  );
});

