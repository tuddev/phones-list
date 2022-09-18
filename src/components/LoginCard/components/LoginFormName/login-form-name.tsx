import { TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form } from 'react-final-form';

export const LoginFormName: React.FC = () => {
  const required = (value: string) => {
    return value && value !== '' ? null : (
      <Typography variant="subtitle2" color="error">
        Это поле обязательно
      </Typography>
    );
  };

  return (
    <Form
      onSubmit={() => null}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <>
                <TextField
                  type="text"
                  label="Введите логин"
                  variant="outlined"
                  style={{ width: '300px' }}
                  {...input}
                  color={meta.touched ? 'error' : 'info'}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </>
            )}
          </Field>
        </form>
      )}
    />
  );
};

observer(LoginFormName);
