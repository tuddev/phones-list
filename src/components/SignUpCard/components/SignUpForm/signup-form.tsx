import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../../../services';
import { validatePassword, validateRequired } from '../../../../utils';
import { TextFieldForm } from '../../../Forms';

export const SignUpForm: React.FC = observer(() => {
  const navigate = useNavigate();

  const handleFormSubmit = (values: {
    email: string;
    name: string;
    password: string;
  }) => {
    loginService
      .signup(values.name, values.email, values.password)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        throw new Error('Ошибка логина');
      });
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextFieldForm
            name="name"
            label="Имя"
            errorText="Это поле обязательно"
            validate={validateRequired}
            isRequired
          />
          <TextFieldForm
            name="email"
            type="email"
            label="Email"
            errorText="Это поле обязательно"
            validate={validateRequired}
            isRequired
          />
          <TextFieldForm
            name="password"
            type="password"
            label="Пароль"
            errorText="Пароль должен быть длиннее 8 символов"
            validate={validatePassword}
            isRequired
          />
          <Button type="submit">Создать аккаунт</Button>
        </form>
      )}
    ></Form>
  );
});
