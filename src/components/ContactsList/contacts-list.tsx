import { Container, List, Typography } from '@mui/material';
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

  const isNoContacts = contactsStore.filteredContacts.length < 1;
  const isSearch = contactsStore.searchQuery.length > 0;

  if (isNoContacts && isSearch) {
    return (
      <Container>
        <Typography>Контактов не найдено</Typography>
      </Container>
    );
  }

  if (isNoContacts) {
    return (
      <Container>
        <Typography>Вы не добавили ни один контакт</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {contactsStore.filteredContacts.map((contact: ContactModel) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Container>
  );
});
