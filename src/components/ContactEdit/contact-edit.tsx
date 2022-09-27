import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Field, Form } from 'react-final-form';
import { Contact, ContactModel } from '../../services';
import AddIcon from '@mui/icons-material/Add';

type TContactEditProps = {
  onSubmit: (values: Contact) => Promise<void>;
  contact?: ContactModel;
  variant?: 'edit' | 'add'
};

export const ContactEdit: React.FC<TContactEditProps> = observer(
  ({ contact, onSubmit, variant = 'add' }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleFormSubmit = (values: Contact) => {
      onSubmit(values)
        .then(() => handleClose());
    };

    let submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () => void 0;
    const Icon = variant === 'add' ? AddIcon : EditIcon;
    return (
      <>
        <IconButton onClick={handleClickOpen} edge="end">
          <Icon htmlColor={variant === 'add' ? '#fff' : undefined}/>
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{variant === 'add' ? 'Добавить контакт' : 'Изменить контакт'}</DialogTitle>
          <DialogContent>
            <>
              <Form
                onSubmit={handleFormSubmit}
                initialValues={contact ? {
                  name: contact.name,
                  email: contact.email,
                  tel: contact.tel,
                } : undefined}
                render={({ handleSubmit }) => {
                  submit = handleSubmit;
                  return (
                    <form onSubmit={handleSubmit}>
                      <Field name="name">
                        {({ input, meta }) => (
                          <>
                            <TextField
                              fullWidth
                              required
                              type="text"
                              error={meta.error && meta.touched}
                              margin="normal"
                              helperText={
                                meta.error && meta.touched
                                  ? 'Это поле обязательно'
                                  : ''
                              }
                              label="Имя"
                              variant="outlined"
                              color={
                                meta.error && meta.touched ? 'error' : 'info'
                              }
                              {...input}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="tel" type="tel">
                        {({ input, meta }) => (
                          <>
                            <TextField
                              fullWidth
                              type="tel"
                              required
                              error={meta.error && meta.touched}
                              margin="normal"
                              helperText={
                                meta.error && meta.touched
                                  ? 'Это поле обязательно'
                                  : ''
                              }
                              label="Телефон"
                              variant="outlined"
                              color={
                                meta.error && meta.touched ? 'error' : 'info'
                              }
                              {...input}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="email" type="email">
                        {({ input, meta }) => (
                          <>
                            <TextField
                              fullWidth
                              type="text"
                              required
                              error={meta.error && meta.touched}
                              margin="normal"
                              helperText={
                                meta.error && meta.touched
                                  ? 'Это поле обязательно'
                                  : ''
                              }
                              label="Email"
                              variant="outlined"
                              color={
                                meta.error && meta.touched ? 'error' : 'info'
                              }
                              {...input}
                            />
                          </>
                        )}
                      </Field>
                    </form>
                  );
                }}
              ></Form>
            </>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Отменить</Button>
            <Button
              onClick={(event) => {
                submit(event);
              }}
            >
              {variant === 'add' ? 'Добавить контакт' : 'Изменить контакт'}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
);
