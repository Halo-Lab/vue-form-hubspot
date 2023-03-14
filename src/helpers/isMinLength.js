export const isMinLength = (value, key, parameter) =>
parameter && value.length < parameter
    ? `It seems like your ${key} is not valid. Your ${key} must contain at least ${parameter} charackters`
    : "";
