import { Button, Grid, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { HeaderLoginCard, LoginForm } from "./components";

export const LoginCard: React.FC = () => {
  return (
    <Paper elevation={10} style={{ padding: "40px" }}>
      <Grid
        container
        alignItems="center"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          width: "300px",
        }}
      >
        <Grid item>
          <HeaderLoginCard />
        </Grid>
        <Grid
          item
          container
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          rowGap={6}
        >
          <Grid item>
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

observer(LoginCard);
