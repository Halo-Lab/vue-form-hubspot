<template>
    <img 
        v-if="error" 
        :src="imageUrl" 
        alt="Error icon" 
        class="error-icon" 
        @mouseenter="tooltipShow = true"
        @mouseleave="tooltipShow = false" 
    />
    <ToolTip 
        :type="'error'" 
        :text="error" 
        :isVisible="tooltipShow" 
    />
</template>
  
<script>
import { ref } from "vue";
import ToolTip from "./ToolTip.vue";
import imageUrl from "@/assets/icons/Danger.svg";
export default {
    components: { ToolTip },
    props: {
        error: {
            type: String,
            default: '',
        }
    },
    setup() {
        const tooltipShow = ref(false);
        return { tooltipShow, imageUrl };
    },
};
</script>
  
  