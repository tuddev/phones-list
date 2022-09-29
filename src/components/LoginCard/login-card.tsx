import { Paper } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TextFieldForm } from '../Forms';
import {
  HeaderLoginCard,
  LoginForm,
  LoginFormPassword,
} from './components';

const validatePasswordStepForm = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export const LoginCard: React.FC = observer(() => {
  return (
    <Paper elevation={10} style={{ padding: '40px', minWidth: 300 }}>
      <HeaderLoginCard />

      <LoginForm>
        <TextFieldForm
          name="email"
          type="email"
          label="Email"
          errorText="Это поле обязательно"
          isAutoFocus
        />
        <LoginFormPassword
          validate={validatePasswordStepForm}
        />
      </LoginForm>
    </Paper>
  );
});
