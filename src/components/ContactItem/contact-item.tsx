import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
  ListItem,
  IconButton,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { contactsStore } from '../../stores';
import { ContactEdit } from '../ContactEdit';
import { Contact, ContactModel } from '../../services';

type TContactItemProps = {
  contact: ContactModel;
};

export const ContactItem: React.FC<TContactItemProps> = observer(({ contact }) => {
  const handleDelete = () => {
    contactsStore.delete(contact.id);
  };

  const handleContactEdit = (values: Contact) => {
    return contactsStore
      .edit({
        ...contact,
        ...values,
      });
  };

  return (
    <ListItem secondaryAction={
      <Grid container spacing={2}>
        <Grid item>
          <ContactEdit onSubmit={handleContactEdit} contact={contact} variant="edit"/>
        </Grid>
        <Grid item>
          <IconButton onClick={handleDelete} edge="end">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    }>
      <Accordion sx={{
        width: 'calc(100% - 50px)',
      }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container>
          <Grid item xs={3}>
            <Typography>{contact.name}</Typography>
          </Grid>
          <Grid item xs={9}>
          <Typography>Телефон: {contact.tel}</Typography>
          </Grid>
        </Grid>
        
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Email: {contact.email}
        </Typography>
      </AccordionDetails>
    </Accordion>
    </ListItem>
  );
});
