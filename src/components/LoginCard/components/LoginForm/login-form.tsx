import { Grid } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { LoginFormName } from "../LoginFormName";
import { LoginFormPassword } from "../LoginFormPassword";
import { LoginFormStore } from "./store";

export const LoginForm: React.FC = () => {
  return (
    <Grid
      container
      rowGap={4}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Grid item>
        <LoginFormName />
      </Grid>
      <Grid item>
        <LoginFormPassword />
      </Grid>
    </Grid>
  );
};

observer(LoginForm);
