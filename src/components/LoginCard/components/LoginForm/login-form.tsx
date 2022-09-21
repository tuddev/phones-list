import { Button, Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { Children } from 'react';
import * as ReactIs from 'react-is';
import { Form } from 'react-final-form';
import { loginFormStore } from '../LoginFormStore';
import { Link } from 'react-router-dom';

export const LoginForm: React.FC<React.PropsWithChildren> = observer(
  ({ children }) => {
    const childrenAsArray = Children.toArray(children);
    const isLastPage =
      loginFormStore.formStepNumber === React.Children.count(children) - 1;

    const validate = (values: Record<string, string>) => {
      const activePage =
        React.Children.toArray(children)[loginFormStore.formStepNumber];

      if (!ReactIs.isElement(activePage)) return {};

      return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    const handleFormSubmit = (values: Record<string, string>) => {
      if (isLastPage) {
        return console.log(values, 'submit');
      } else {
        loginFormStore.nextStep();
      }
    };

    return (
      <Form
        validate={validate}
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              rowGap={4}
              flexDirection="column"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              {childrenAsArray[loginFormStore.formStepNumber]}
            </Grid>

            <Grid container justifyContent="space-between">
              <Grid item>
                {loginFormStore.formStepNumber > 0 && (
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => loginFormStore.prevStep()}
                  >
                    Назад
                  </Button>
                )}
                {loginFormStore.formStepNumber === 0 && (
                  <Link
                    to="/signup"
                  >
                    Нет аккаунта? Создать!
                  </Link>
                )}
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit">
                  {isLastPage ? 'Войти' : 'Далее'}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    );
  },
);
