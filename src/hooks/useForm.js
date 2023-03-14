import { reactive } from "vue";

import { useField } from "./useField";

export const useForm = (portalId, formId) => {
  const formState = reactive({});
  const formStateInitial = {};
  const errors = reactive({});
  const formValidator = {};

  const getFieldValue = (name) => formState[name];

  const setFieldValue = (name, value) => {
    formState[name] = value;
  };

  const getFieldError = (name) => errors[name];

  const setFieldError = (name, error) => {
    errors[name] = error;
  };

  const hasFormErrors = () => Object.values(errors).some((error) => !!error);

  const registerField = (name, defaultValue, validator) => {
    const {
      value,
      validate: fieldValidate,
      resetError: fieldResetError,
      fileValidate,
    } = useField(
      name,
      defaultValue,
      setFieldValue,
      getFieldValue,
      formStateInitial
    );

    const validate = () => fieldValidate(validator, setFieldError);

    const resetError = () => fieldResetError(setFieldError);

    const fileFieldValidate = (file, validTypes) =>
      fileValidate(file, validTypes, setFieldError);

    formValidator[name] = name.includes("[]") ? fileFieldValidate : validate;

    return {
      value,
      validate,
      resetError,
      fileFieldValidate,
    };
  };

  const resetForm = () => {
    Object.keys(formState).forEach((key) =>
      setFieldValue(key, formStateInitial[key])
    );
    Object.keys(errors).forEach((key) => (errors[key] = undefined));
  };

  const onSubmit = async (callBack) => {
    for (const key in formValidator) {
      if (formValidator[key]()) {
        return;
      }
    }

    if (callBack) {
      return callBack({ ...formState });
    }

    if (!formId) {
      throw new Error(
        'You did not provided "portalId" and "formId" or submit callback function. Please, provide either'
      );
    }

    const URL = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = [];
    for (let [key, value] of Object.entries(formState)) {
      if (Array.isArray(value)) {
        value = value.join('; ')
      }
      data.push({ name: key, value})
    }

    const formData = JSON.stringify({ fields: data });

    try {
      await fetch(URL, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
    finally {
      resetForm();
    }
  };

  return {
    registerField,
    getFieldError,
    onSubmit,
    hasFormErrors,
    setFieldError,
  };
};
