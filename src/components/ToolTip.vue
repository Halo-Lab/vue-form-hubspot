<template>
  <div 
  :class="['tooltip', 
    {
      [`tooltip-${type}`]: true, 
      [`tooltip-${isVisible ? 'visible' : 'hidden'}`]: true, 
    }]"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    text: {
      type: String,
      default: "",
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
