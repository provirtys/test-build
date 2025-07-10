import { VInput } from '@base';
import { computed, ref } from 'vue';

const variants = {
    standard: 'Обычный',
    outlined: 'С границами',
    filled: 'Заполненный',
};

const types = {
    string: 'Строка',
    number: 'Число',
    textarea: 'Textarea',
    password: 'Пароль',
};

/** Компонент input, который в своей основе использует q-input, но с некоторыми брендовыми изменениями. Можно передавать все пропсы, которые принимает базовый компонент q-input. */

export default {
    component: VInput,
    argTypes: {
        type: {
            description: 'Тип поля ввода',
            options: Object.keys(types),
            control: {
                type: 'select',
                labels: types,
            },
        },
        variant: {
            description: 'Стиль поля ввода',
            options: Object.keys(variants),
            control: {
                type: 'select',
                labels: variants,
            },
        },
        label: {
            description: 'Название поля',
        },
        modelValue: {
            description: 'Значение поля',
        },
        placeholder: {
            description: 'Заглушка для поля',
        },
        labelOutside: {
            description: 'Название за границами поля ввода',
            options: [true, false],
        },
        required: {
            description: 'Обязательное поле',
            options: [true, false],
        },
        dense: {
            description: 'Занимать меньше пространства',
            options: [true, false],
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        type: 'string',
        variant: 'standard',
        label: '',
        modelValue: '',
        placeholder: '',
        labelOutside: false,
        required: false,
        dense: false,
    },
};

const BaseComponent = (args) => ({
    components: { VInput },
    setup() {
        const modelValue = ref(args.modelValue);

        const inputProps = computed(() => {
            const baseProps = { ...args };

            baseProps.variant = undefined;

            if (args.variant !== variants.standard) {
                baseProps[args.variant] = true;
            }

            return baseProps;
        });

        const updateModelValue = (val) => {
            args.modelValue = val;
        };

        return {
            modelValue,
            inputProps,
            args,
            updateModelValue,
        };
    },
    template: `<v-input v-model="modelValue" v-bind="inputProps" @update:modelValue="updateModelValue"/>`,
});

export const Standard = BaseComponent.bind({});
Standard.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
};

export const StandardDense = BaseComponent.bind({});
StandardDense.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    dense: true,
};

export const StandardLabelOutside = BaseComponent.bind({});
StandardLabelOutside.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    labelOutside: true,
};

export const StandardLabelOutsideRequired = BaseComponent.bind({});
StandardLabelOutsideRequired.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    labelOutside: true,
    required: true,
};

export const Outlined = BaseComponent.bind({});
Outlined.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
};

export const OutlinedLabelOutside = BaseComponent.bind({});
OutlinedLabelOutside.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
};

export const OutlinedLabelOutsideRequired = BaseComponent.bind({});
OutlinedLabelOutsideRequired.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
    required: true,
};

export const Filled = BaseComponent.bind({});
Filled.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
};

export const FilledLabelOutside = BaseComponent.bind({});
FilledLabelOutside.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
    labelOutside: true,
};

export const FilledLabelOutsideRequired = BaseComponent.bind({});
FilledLabelOutsideRequired.args = {
    type: 'string',
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
    labelOutside: true,
    required: true,
};

export const Password = BaseComponent.bind({});
Password.args = {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
};

export const PasswordRequired = BaseComponent.bind({});
PasswordRequired.args = {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
    required: true,
};

export const PasswordWithValidation = BaseComponent.bind({});
PasswordWithValidation.storyName = 'Password With Validation (min length = 6)';
PasswordWithValidation.args = {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
    rules: [(val) => val.length < 6 || 'Минимальная длина 6 символов'],
    lazyRules: true,
    required: true,
};

export const Textarea = BaseComponent.bind({});
Textarea.args = {
    type: 'textarea',
    modelValue: '',
    label: 'Сообщение',
};

export const TextareaRequired = BaseComponent.bind({});
TextareaRequired.args = {
    type: 'textarea',
    modelValue: '',
    label: 'Сообщение',
    required: true,
};
