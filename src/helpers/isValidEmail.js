export const isValidEmail = (value, key) =>
  !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ? `It seems like your ${key} is not valid. Please, enter valid ${key} to continue`
    : "";
