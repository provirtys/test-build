import { computed, ref } from 'vue';
import { VCheckboxButton } from './index.js';

// Размеры кнопки
const lg = 'lg';
const md = 'md';
const sm = 'sm';
const xs = 'xs';

//Названия иконок
const none = '';
const qr = 'qr';
const aggregation = 'aggregation';
const finishAggregation = 'finish-aggregation';
const barCode = 'barcode';
const dataMatrix = 'data-matrix';
const done = 'done';
const iconNames = { none, qr, aggregation, finishAggregation, barCode, dataMatrix, done };

const sizes = { lg, md, sm, xs };

export default {
    component: VCheckboxButton,
    argTypes: {
        label: {
            description: 'Текст кнопки',
        },
        modelValue: {
            description: 'Выбранное значение',
            options: [true, false],
        },
        iconName: {
            description: 'Имя иконки (название файла из папки с иконками без расширения)',
            options: Object.keys(iconNames),
            mapping: iconNames,
            control: {
                type: 'select',
                labels: {
                    ...iconNames,
                    none: 'Нет',
                },
            },
        },
        isPlane: {
            description: 'Без границ',
            options: [true, false],
        },
        height: {
            description: 'Размер элемента',
            options: Object.keys(sizes),
            mapping: sizes,
            control: {
                type: 'select',
                labels: {
                    lg: 'Большой (lg)',
                    md: 'Средний (md)',
                    sm: 'Маленький (sm)',
                    xs: 'Очень маленький (xs)',
                },
            },
        },
        isDisabled: {
            description: 'Активность чекбокса',
            options: [true, false],
        },
    },
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'dark', value: '#242a2b' },
                { name: 'white', value: '#ffffff' },
                { name: 'light', value: '#ededed' },
                { name: 'light-gray', value: '#f1f1f1' },
            ],
        },
    },
    args: {
        modelValue: false,
        label: 'Checkbox',
        height: 'lg',
        iconName: '',
        isPlane: false,
        isDisabled: false,
    },
};

const BaseComponent = (args) => ({
    components: { VCheckboxButton },
    setup() {
        const checkboxValue = ref(args.modelValue);
        const bindingArgs = computed(() => {
            const { modelValue, ...restArgs } = args;

            return restArgs;
        });

        return {
            checkboxValue,
            bindingArgs,
        };
    },
    template: `<v-checkbox-button v-model="checkboxValue" v-bind="bindingArgs"/>`,
});

export const Standard = BaseComponent.bind({});

export const Checked = BaseComponent.bind({});
Checked.args = {
    modelValue: true,
};

export const WithIcon = BaseComponent.bind({});
WithIcon.args = {
    iconName: qr,
};

export const Plane = BaseComponent.bind({});
Plane.args = {
    isPlane: true,
};

export const MediumHeight = BaseComponent.bind({});
MediumHeight.args = {
    height: 'md',
};

export const SmallHeight = BaseComponent.bind({});
SmallHeight.args = {
    height: 'sm',
};

export const ExtraSmallHeight = BaseComponent.bind({});
ExtraSmallHeight.args = {
    height: 'xs',
};

export const Disabled = BaseComponent.bind({});
Disabled.args = {
    isDisabled: true,
};
