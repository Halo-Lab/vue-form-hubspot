<template>

<div :class="['input-container', {[fieldClassName]: fieldClassName}]">
    <Label :label="label" :for="name" :className="labelClassName"/>
    <textarea 
    :class="{ 
      'input input-textarea': true, 
      'input-error': error, 
      [inputClassName]: inputClassName,
        [errorClassName]: error && errorClassName 
      }" 
    v-model.trim="value"
    :placeholder="placeholder" 
    :disabled="isDisabled"
    @blur="onBlur" 
    @focus="onFocus" 
    :name="name" 
  />
    <Error :error="error" />
  </div>
</template>

<script>
import { inject, computed } from 'vue';
import Label from './Label.vue';
import Error from './Error.vue';

export default {
  components: {Label, Error},
  props: {
    label: {
      type: String,
      default: ''
    },
    validator: {
      type: Array,
      default: null,
    },
    placeholder: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    },
    name: {
      type: String,
      requiered: true,
    },
    inputClassName: {
      type: String,
      default: ''
    },
    labelClassName: {
      type: String,
      default: ''
    },
    errorClassName: {
      type: String,
      default: ''
    },
    fieldClassName: {
      type: String,
      default: ''
    },
    
    defaultValue: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const { name, defaultValue, validator } = props;
    const registerField = inject('registerField');
    const getFieldError = inject('getFieldError');
    const error = computed(() => getFieldError(name));
    const { value,  validate, resetError } = registerField(name, defaultValue, validator);
    const onBlur = () => validate();
    const onFocus = () => resetError(name);

    return { value, error, onBlur, onFocus };
  }
};
</script>
