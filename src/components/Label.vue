<template>
  <label :class="{
    'label': true,
    [className]: className,
    'label-disabled': isDisabled
  }">
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
  },
};
</script>

