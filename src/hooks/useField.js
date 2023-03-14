import { ref, computed, onBeforeMount } from "vue";

import isValidField from "@/helpers";

export const useField = (
  name,
  defaultValue,
  setFieldValue,
  getFieldValue,
  formStateInitial
) => {
  onBeforeMount(() => {
    setFieldValue(name, defaultValue);
    formStateInitial[name] = defaultValue ?? undefined;
  });

  const value = computed({
    get: () => getFieldValue(name) ?? defaultValue,
    set: (newValue) => {
      setFieldValue(name, newValue);
    },
  });

  const validate = (validators, callBack) => {
    if (validators) {
      for (const validator of validators) {
        const { name: key, message, value: parameter } = validator;
        let errorMassage = isValidField(key, name, value.value, parameter);
        if (errorMassage) {
          if (key === "func") {
            errorMassage = message;
          }
          callBack(name, errorMassage);
          return errorMassage;
        }
      }
    }
  };

  const fileValidate = (file, validExtentions, callBack) => {
    if (!file) {
      return;
    }
    const ext = file.name.toLowerCase().split('.').slice(-1)[0];
    const error = (!validExtentions.map((t) => t.toLowerCase()).includes(ext))
      ? 'This document is not supported, please delete and upload another file.'
      : '';
    if (error) {
      callBack(name, error)
    }
    return error
  }

  const resetError = (callBack) => {
    callBack(name, "");
  };

  return {
    value,
    validate,
    fileValidate,
    resetError,
  };
};
