import React from 'react';
import { TextFieldForm } from '../../../Forms';

type TLoginFormPasswordProps = {
  validate: (values: Record<string, string>) => Record<string, string>;
};

export const LoginFormPassword: React.FC<TLoginFormPasswordProps> = () => {
  return (
    <TextFieldForm
      name="password"
      label="Пароль"
      errorText="Это поле обязательно"
    />
  );
};
