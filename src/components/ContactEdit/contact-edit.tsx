import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Form } from 'react-final-form';
import { Contact, ContactModel } from '../../services';
import AddIcon from '@mui/icons-material/Add';
import { TextFieldForm } from '../Forms';
import { validateRequired, validateTel } from '../../utils';

type TContactEditProps = {
  onSubmit: (values: Contact) => Promise<void>;
  contact?: ContactModel;
  variant?: 'edit' | 'add';
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
      onSubmit(values).then(() => handleClose());
    };

    let submit: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void = () => void 0;
    const isAddVariant = variant === 'add';
    const Icon = isAddVariant ? AddIcon : EditIcon;
    return (
      <>
        <IconButton onClick={handleClickOpen} edge="end">
          <Icon htmlColor={isAddVariant ? '#fff' : undefined} />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            {isAddVariant ? 'Добавить контакт' : 'Изменить контакт'}
          </DialogTitle>
          <DialogContent>
            <>
              <Form
                onSubmit={handleFormSubmit}
                initialValues={
                  contact
                    ? {
                      name: contact.name,
                      email: contact.email,
                      tel: contact.tel,
                    }
                    : undefined
                }
                render={({ handleSubmit }) => {
                  submit = handleSubmit;
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextFieldForm
                        name="name"
                        label="Имя"
                        validate={validateRequired}
                        errorText="Это поле обязательно"
                        isRequired
                      />
                      <TextFieldForm
                        name="tel"
                        type="tel"
                        label="Телефон"
                        validate={validateTel}
                        errorText="Неверный номер телефона"
                        mask="+7 999 999 99 99"
                      />
                      <TextFieldForm
                        name="email"
                        type="email"
                        label="Email"
                        isRequired
                      />
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
