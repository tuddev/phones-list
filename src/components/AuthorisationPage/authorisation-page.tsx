import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { LoginCard } from './components/LoginCard';

export const AuthorisationPage: React.FC = () => {
  return <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={3}>
      <LoginCard />
    </Grid>   
  </Grid> 
}

observer(AuthorisationPage)