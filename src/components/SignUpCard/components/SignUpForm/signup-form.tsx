import { Button, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form } from 'react-final-form';

export const SignUpForm: React.FC = observer(() => {
  return (
    <Form
      onSubmit={() => void 0}
      render={({ handleSubmit }) => (
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
                    meta.error && meta.touched ? 'Это поле обязательно' : ''
                  }
                  label="Введите имя"
                  variant="outlined"
                  color={meta.error && meta.touched ? 'error' : 'info'}
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
                    meta.error && meta.touched ? 'Это поле обязательно' : ''
                  }
                  label="Введите email"
                  variant="outlined"
                  color={meta.error && meta.touched ? 'error' : 'info'}
                  {...input}
                />
              </>
            )}
          </Field>
          <Field name="password" type="password">
            {({ input, meta }) => (
              <>
                <TextField
                  fullWidth
                  type="password"
                  required
                  error={meta.error && meta.touched}
                  margin="normal"
                  helperText={
                    meta.error && meta.touched ? 'Это поле обязательно' : ''
                  }
                  label="Введите пароль"
                  variant="outlined"
                  color={meta.error && meta.touched ? 'error' : 'info'}
                  {...input}
                />
              </>
            )}
          </Field>
          <Button type="submit">
            Создать аккаунт
          </Button>
        </form>
      )}
    ></Form>
  );
});
