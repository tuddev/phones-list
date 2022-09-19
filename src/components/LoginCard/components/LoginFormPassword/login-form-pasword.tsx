import { TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field } from 'react-final-form';

type TLoginFormNameProps = {
  validate: (values: Record<string, string>) => Record<string, string>;
};

export const LoginFormPassword: React.FC<TLoginFormNameProps> = () => {
  const required = (value: string) =>
    value ? null : (
      <Typography variant="subtitle2" color="coral">
        Это поле обязательно
      </Typography>
    );

  return (
    <Field name="password" validate={required} fullWidth >
      {({ input, meta }) => (
        <>
          <TextField
            fullWidth
            type="text"
            error={meta.error && meta.touched}
            margin="normal"
            helperText={meta.error && meta.touched ? 'Это поле обязательно' : ''}
            label="Введите пароль"
            variant="outlined"
            color={meta.error && meta.touched ? 'error' : 'info'}
            {...input}
          />
        </>
      )}
    </Field>
  );
};

observer(LoginFormPassword);
