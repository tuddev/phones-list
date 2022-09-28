export const validateRequired = (value: string) => {
  if (!value) return 'Это поле обязательно';
};

export const validateTel = (value: string | undefined) => {
  const regOnlyDigitAndSigns = /^[\d ()+]+$/;

  if (!regOnlyDigitAndSigns.test(value)) return 'Неверный телефон';
};

export const validatePassword = (value: string | undefined) => {
  if (!validateRequired(value) && value.length < 8) return 'Пароль должен быть длиннее 8 символов';
};