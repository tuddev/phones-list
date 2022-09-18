import { Grid } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { LoginFormName } from "../LoginFormName";
import { LoginFormPassword } from "../LoginFormPassword";
import { LoginFormStore } from "./store";

const loginFormStore = new LoginFormStore();

type ILoginFormProps = {
  isRequireName: boolean;
};

export const LoginForm: React.FC<ILoginFormProps> = ({ isRequireName }) => {
  return (
    <Grid
      container
      rowGap={4}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      {isRequireName ? (
        <Grid item>
          <LoginFormName loginFormStore={loginFormStore}/>
        </Grid>
      ) : (
        <Grid item>
          <LoginFormPassword />
        </Grid>
      )}
    </Grid>
  );
};

observer(LoginForm);
