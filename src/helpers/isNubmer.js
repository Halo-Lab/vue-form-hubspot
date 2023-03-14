export const isNumber = (value, key) =>
  !/^[0-9]+$/.test(value)
    ? `It seems like your ${key} is not valid. Your ${key} must contain only numbers`
        : "";
