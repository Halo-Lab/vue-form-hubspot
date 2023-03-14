export const isMatch = (value, key, parameter) =>
  !parameter.test(value)
    ? `It seems like you fill in the ${key} field incorrectly. Please, check it to continue`
        : "";
