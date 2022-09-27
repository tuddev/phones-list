import { TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field } from 'react-final-form';

export const LoginFormName: React.FC = () => {
  const required = (value: string) => {
    return value && value !== '' ? null : (
      <Typography variant="subtitle2" color="error">
        Это поле обязательно
      </Typography>
    );
  };

  return (
    <Field name="email" validate={required} fullWidth >
      {({ input, meta }) => (
        <>
          <TextField
            type="text"
            label="Введите логин"
            error={meta.error && meta.touched}
            margin="normal"
            helperText={meta.error && meta.touched ? 'Это поле обязательно' : ''}
            variant="outlined"
            fullWidth
            {...input}
            color={meta.touched ? 'error' : 'info'}
          />
        </>
      )}
    </Field>
  );
};

observer(LoginFormName);
