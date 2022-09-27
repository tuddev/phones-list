import { Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { SignUpForm } from './components';

export const SignUpCard: React.FC = observer(() => {
  return (
    <Paper elevation={10} style={{ padding: '20px', maxWidth: 300 }}>
      <Typography align="center" fontSize="24px" fontWeight="600">
        Sign up your profile
      </Typography>
      <SignUpForm/>
    </Paper>
  );
});
