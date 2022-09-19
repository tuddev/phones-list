import { Paper } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  HeaderLoginCard,
  LoginForm,
  LoginFormName,
  LoginFormPassword,
} from './components';

export const LoginCard: React.FC = observer(() => {
  return (
    <Paper elevation={10} style={{ padding: '40px', minWidth: 300 }}>
      <HeaderLoginCard />

      <LoginForm>
        <LoginFormName />
        <LoginFormPassword
          validate={(values: Record<string, string>) => {
            const errors: Record<string, string> = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            return errors;
          }}
        />
      </LoginForm>
    </Paper>
  );
});
