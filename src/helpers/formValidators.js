import { isEmpty } from "./isEmpty";
import { isValidEmail } from "./isValidEmail";
import { isNumber } from "./isNubmer";
import { isLetters } from "./isLetters/";
import { isMax } from "./isMax";
import { isMin } from "./isMin";
import { isMinLength } from './isMinLength'
import { isMaxLength } from './isMaxLength';
import { isMatch } from "./isMatch";

const validatorMapper = {
  required: isEmpty,
  email: isValidEmail,
  number: isNumber,
  letters: isLetters,
  min: isMin,
  max: isMax,
  minLength: isMinLength,
  maxLength: isMaxLength,
  regexp: isMatch,
};

export const isValidField = (validatorKey, key, value, parameter) => {
  if (validatorKey === 'func') {
    return parameter(value)
  }

  return validatorMapper[validatorKey]
    ? validatorMapper[validatorKey](value, key, parameter)
    : '';
};
