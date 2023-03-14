<template>
    <div :class="['input-container', { [fieldClassName]: fieldClassName }]">
        <Label :label="label" :className="labelClassName" :isDisabled="isDisabled" />
        <div :class="['box-container', { 'disabled': isDisabled }]">
            <label v-for="field in fields" class="box-field">
                <input
                    class="hidden" 
                    type="checkbox" 
                    :disabled="isDisabled" 
                    :name="name" 
                    v-model="value"
                    :value="field.value" 
                />
                <span :class="{
                    'input input-box input-checkbox': true,
                    'input-checkbox-checked': value.includes(field.value),
                    [inputClassName]: inputClassName,
                }" />
                <span :class="
                    {
                        'box-label': true,
                        [inputLabelClassName]: inputLabelClassName
                    }
                ">
                    {{ field.label }}
                </span>
            </label>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';

import Label from './Label.vue';

export default {
    components: { Label },
    props: {
        label: {
            type: String,
            requiered: true,
        },
        isDisabled: {
            type: Boolean,
        },
        name: {
            type: String,
            requiered: true,
        },
        fields: {
            type: Array,
            requiered: true,
        },
        fieldClassName: {
            type: String,
            default: ''
        },
        labelClassName: {
            type: String,
            default: ''
        },
        inputClassName: {
            type: String,
            default: ''
        },
        inputLabelClassName: {
            type: String,
            default: ''
        },
    },
    setup(props) {
        const { name } = props;
        const registerField = inject('registerField');
        const { value } = registerField(name, []);

        return { value };
    }
};
</script>