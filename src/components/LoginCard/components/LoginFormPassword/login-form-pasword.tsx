import React from 'react';
import { validatePassword } from '../../../../utils';
import { TextFieldForm } from '../../../Forms';

type TLoginFormPasswordProps = {
  validate: (values: Record<string, string>) => Record<string, string>;
};

export const LoginFormPassword: React.FC<TLoginFormPasswordProps> = () => {
  return (
    <TextFieldForm
      name="password"
      isAutoFocus
      label="Пароль"
      validate={validatePassword}
      errorText="Пароль должен быть длиннее 8 символов"
    />
  );
};
