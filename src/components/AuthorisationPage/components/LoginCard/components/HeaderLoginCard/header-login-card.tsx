import { Grid, Typography } from "@mui/material";
import React from "react";

export const HeaderLoginCard: React.FC = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      rowGap={3}
      style={{ marginBottom: "20px" }}
    >
      <Grid item>
        <Grid item>
          <Typography fontFamily="revert" fontSize="30px" fontWeight="600">
            YOUR PROFILE
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid item>
          <Typography fontWeight="600">ВХОД</Typography>
        </Grid>
        <Typography>Личный кабинет</Typography>
      </Grid>
    </Grid>
  );
};
