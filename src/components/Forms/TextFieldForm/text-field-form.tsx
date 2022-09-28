import { TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Field } from 'react-final-form';
import InputMask from 'react-input-mask';

type TTextFieldFormProps = {
  name: string;
  label: string;
  validate?: (value: string | undefined) => string;
  type?: 'text' | 'email' | 'tel' | 'password';
  isAutoFocus?: boolean;
  isRequired?: boolean;
  errorText?: string;
  mask?: string;
};

export const TextFieldForm: React.FC<TTextFieldFormProps> = observer(
  ({
    label,
    name,
    type = 'text',
    validate,
    isAutoFocus,
    isRequired,
    errorText,
    mask,
  }) => {
    return (
      <>
        <Field name={name} type={type} validate={validate}>
          {({ input, meta }) => {
            const InputForm = (
              <TextField
                fullWidth
                autoFocus={isAutoFocus}
                required={isRequired}
                type={type}
                error={meta.error && meta.touched}
                margin="normal"
                helperText={meta.error && meta.touched ? errorText : ''}
                label={label}
                color={meta.error && meta.touched ? 'error' : 'info'}
                {...input}
              />
            );
            if (mask) {
              return (
                <InputMask mask={mask} {...input}>
                  {InputForm}
                </InputMask>
              );
            }

            return InputForm;
          }}
        </Field>
      </>
    );
  },
);
