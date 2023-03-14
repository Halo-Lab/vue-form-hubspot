<template>
    <div :class="['input-container', { [fieldClassName]: fieldClassName }]">
        <Label :label="label" :className="labelClassName" :isDisabled="isDisabled" />
        <div :class="['box-container', { 'disabled': isDisabled }]">
            <label v-for="field in fields" class="box-field">
                <input 
                    class="hidden" 
                    type="radio" 
                    :disabled="isDisabled" 
                    :name="name" 
                    v-model="value"
                    :value="field.value" 
                />
                <span :class="{
                    'input input-box input-radio': true,
                    'input-radio-checked': value === field.value,
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
        const { name, fields } = props;
        const registerField = inject('registerField');
        const currentChecked = fields.find((field) => field.checked)?.value ?? fields[0].value;
        const { value } = registerField(name, currentChecked);

        return { value };
    }
};
</script>