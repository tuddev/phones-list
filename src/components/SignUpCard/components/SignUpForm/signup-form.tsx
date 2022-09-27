import { Button, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import { loginStore } from '../../../../services';

export const SignUpForm: React.FC = observer(() => {
  const navigate = useNavigate();

  const handleFormSubmit = (values: {
    email: string;
    name: string;
    password: string;
  }) => {
    loginStore
      .signup(values.name, values.email, values.password)
      .then(() => {
        console.log('logged');
        navigate('/');
      })
      .catch(() => {
        console.log('catch');
      });
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
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
          <Button type="submit">Создать аккаунт</Button>
        </form>
      )}
    ></Form>
  );
});
