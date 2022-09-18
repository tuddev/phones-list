import { TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { Field, Form } from "react-final-form";

export const LoginFormPassword: React.FC = () => {
  const required = (value: string) =>
    value ? null : (
      <Typography variant="subtitle2" color="coral">
        Это поле обязательно
      </Typography>
    );

  return (
    <Form
      onSubmit={() => console.log("submit")}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="password" validate={required}>
            {({ input, meta }) => (
              <div>
                <TextField
                  type="text"
                  label="Введите пароль"
                  variant="outlined"
                  color={meta.touched ? "error" : "info"}
                  {...input}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </form>
      )}
    />
  );
};

observer(LoginFormPassword);
