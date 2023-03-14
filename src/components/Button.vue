<template>
  <button 
    :type="type" 
    :class="[
      'button',
      {
        'button-arrow': isArrow,
        'button-stroked': isStroke,
        'button-filled': !isIcon && !isStroke,
        'button-icon': isIcon,
        [className]: className
      }
    ]" 
    :disabled="disabled"
  >
    {{ label }}
    <slot />
  </button>
</template>

<script>
import { inject, computed } from 'vue';
export default {
  props: {
    isStroke: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "button",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { isDisabled, type } = props;
    const hasFormErrors = inject('hasFormErrors');
    const disabled = computed(() => (hasFormErrors() && type === 'submit' || isDisabled) || isDisabled);

    return { disabled };
  }
}
</script>
