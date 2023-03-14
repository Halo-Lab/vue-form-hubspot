<template>
    <div :class="['input-container', { [fieldClassName]: fieldClassName }]">
        <Label :label="label" :className="labelClassName" :isDisabled="isDisabled" />
        <div 
            @focusin="onFocus" 
            @focusout="onBlur" 
            :tabindex="0" 
            ref="selectRef" 
            :class="{
            'input input-select': true,
            'input-error': error,
            [inputClassName]: inputClassName,
            [errorClassName]: error && errorClassName,
            'disabled': isDisabled
            }"
        >
            <div class="input-select-current" @click="resetOpened">
                {{ currentLabel }}
                <svg class="icon-arrow" width="12" height="6" viewBox="0 0 12 6" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5L11 0.999999" stroke="#060811" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <ul v-if="isOpened" class="input-select-list">
                <li v-if="search" :class="['input-select-item input-select-item-search']">
                    <input 
                        class="input input-search" 
                        type="text" 
                        placeholder="Type in something" 
                        v-model="searchValue"
                        name="selectSearch" 
                    />
                    <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.27268 0C11.2726 0 14.5454 3.27278 14.5454 7.27305C14.5454 9.01854 13.9273 10.6185 12.909 11.8549L15.7818 14.7278C16.0727 15.0186 16.0727 15.455 15.7818 15.746C15.6363 15.9277 15.4546 16.0005 15.2727 16.0005C15.0909 16.0005 14.909 15.9278 14.7636 15.7823L11.8908 12.9095C10.6181 13.9277 9.0181 14.5459 7.27274 14.5459C3.27278 14.5459 6.88781e-08 11.2731 6.88781e-08 7.27312C-0.00012171 3.27285 3.27278 6.54553e-05 7.27274 6.54553e-05L7.27268 0ZM7.27268 13.0911C10.4728 13.0911 13.0911 10.4729 13.0911 7.27274C13.0909 4.0729 10.4727 1.45467 7.27268 1.45467C4.07252 1.45467 1.4543 4.0729 1.4543 7.27305C1.4543 10.4729 4.07252 13.0911 7.27268 13.0911Z"
                            fill="#9B9CA0" />
                    </svg>
                </li>
                <li 
                    :class="[
                        'input-select-item', 
                        { 'active': option.value === value }
                    ]" 
                    v-for="option in currentOptions"
                    :key="option.value" 
                    @mousedown="() => onChange(option.value)"
                >
                    {{ option.label }}
                </li>
            </ul>
        </div>
        <Error :error="error" />
    </div>
</template>

<script>
import { inject, computed, ref } from 'vue';

import Label from './Label.vue';
import Error from './Error.vue';

export default {
    components: { Label, Error },
    props: {
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            requiered: true
        },
        options: {
            type: Array,
            requiered: true,
        },
        defaultValue: {
            type: String,
        },
        search: {
            type: Boolean,
            default: false,
        },
        validator: {
            type: Array
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
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { name, defaultValue, validator, options } = props;
        const searchValue = ref('');
        const registerField = inject('registerField');
        const getFieldError = inject('getFieldError');
        const error = computed(() => getFieldError(name));

        const currentOptions = computed(
            () => options.filter((option) => option.label.toLowerCase()
                .includes(searchValue.value.toLowerCase())));

        const isInOptions = options.map(option => option.value).includes(defaultValue)
        const { value, validate, resetError }
            = registerField(name, isInOptions ? defaultValue : undefined, validator);
        const currentLabel = computed(
            () => options.find((option) => option.value === value.value)?.label
                ?? options[0].label);

        const isOpened = ref(false);
        const selectRef = ref();

        const resetOpened = () => {
            isOpened.value = !isOpened.value;
        };

        const onFocus = () => resetError(name);

        const onBlur = (event) => {
            if (event.relatedTarget?.name === 'selectSearch') {
                event.preventDefault();
                return;
            }
            validate();
            searchValue.value = '';
            isOpened.value = false;
        }

        const onChange = (newValue) => {
            value.value = newValue;
            searchValue.value = '';
            isOpened.value = false;
            selectRef.value.blur();
            validate();
        };

        return {
            value,
            error,
            currentOptions,
            onBlur,
            onFocus,
            currentLabel,
            isOpened,
            onChange,
            selectRef,
            resetOpened,
            searchValue,
        };
    }
}
</script>

<style></style>