export const isLetters = (value, key) =>
  !/^([a-zA-Z]*)$/.test(value)
    ? `It seems like your ${key} is not valid. Please, enter ${key} with only alphabetical characters to continue`
    : "";
