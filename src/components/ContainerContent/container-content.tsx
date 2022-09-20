import { Container, Paper } from '@mui/material';
import React from 'react';

export const ContainerContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Container sx={{ pt: 1, pb: 3 }}>
      <Paper
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 40,
        }}
        elevation={4}
      >
        {children}
      </Paper>
    </Container>
  );
};
