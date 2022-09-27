import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { SignUpCard } from '../components';

export const SignUpPage: React.FC = observer(() => {
  return <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={3}>
      <SignUpCard/>
    </Grid>   
  </Grid>;  
});