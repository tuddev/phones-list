import { Button, Grid, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { HeaderLoginCard, LoginForm } from "./components";
import { LoginCardStore } from "./store";

const loginCardStore = new LoginCardStore();

export const LoginCard: React.FC = () => {
  let isRequireName = true;
  
  const handleClick = () => {
    if (loginCardStore.loginFormStore.requiredName) isRequireName = false;
  };

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
            <LoginForm isRequireName={isRequireName} />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ width: "100px" }}
              onClick={handleClick}
            >
              Далее
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

observer(LoginCard);
