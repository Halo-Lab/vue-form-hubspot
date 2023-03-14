export const isEmpty = (value, key) =>
  !value
    ? `It seems like you didn’t fill in the field. Please, write your ${key} to continue`
        : "";
