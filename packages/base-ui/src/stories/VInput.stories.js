import { VInput } from "@base";
import { expect, getElementError, userEvent, waitFor, within } from "storybook/test";
import { computed, ref } from "vue";

const variants = {
    standard: "Обычный",
    outlined: "С границами",
    filled: "Заполненный",
};

const types = {
    string: "Строка",
    number: "Число",
    textarea: "Textarea",
};

/** Компонент input, который в своей основе использует q-input, но с некоторыми брендовыми изменениями. Можно передавать все пропсы, которые принимает базовый компонент q-input. */

export default {
    title: "VInput",
    component: VInput,
    argTypes: {
        type: {
            description: "Тип поля ввода",
            options: Object.keys(types),
            control: {
                type: "select",
                labels: types,
            },
        },
        variant: {
            description: "Стиль поля ввода",
            options: Object.keys(variants),
            control: {
                type: "select",
                labels: variants,
            },
        },
        labelOutside: {
            description: "Название за границами поля ввода",
            options: [true, false],
            control: {
                labels: {
                    true: "Да",
                    false: "Нет",
                },
            },
        },
    },
    args: {
        variant: "standard",
        rounded: false,
        labelOutside: false,
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
    type: "string",
    placeholder: "Введите имя",
    modelValue: "",
    label: "Ваше имя",
    labelColor: "#0f0",
};

export const Outlined = BaseComponent.bind({});
Outlined.args = {
    type: "string",
    placeholder: "Введите имя",
    modelValue: "",
    label: "Ваше имя",
    variant: "outlined",
};

export const OutlinedLabelOutside = BaseComponent.bind({});
OutlinedLabelOutside.args = {
    type: "string",
    placeholder: "Введите имя",
    modelValue: "",
    label: "Ваше имя",
    variant: "outlined",
    labelOutside: true,
};

export const Filled = BaseComponent.bind({});
Filled.args = {
    type: "string",
    placeholder: "Введите имя",
    modelValue: "",
    label: "Ваше имя",
    variant: "filled",
};

export const FilledLabelOutside = BaseComponent.bind({});
FilledLabelOutside.args = {
    type: "string",
    placeholder: "Введите имя",
    modelValue: "",
    label: "Ваше имя",
    variant: "filled",
    labelOutside: true,
};

export const Password = BaseComponent.bind({});
Password.args = {
    type: "password",
    placeholder: "Введите пароль",
    modelValue: "",
    label: "Пароль",
};

export const PasswordWithValidation = BaseComponent.bind({});
PasswordWithValidation.args = {
    type: "password",
    placeholder: "Введите пароль",
    modelValue: "",
    label: "Пароль",
    rules: [(val) => val.length >= 6 || "Минимальная длина 6 символов"],
    lazyRules: true,
};

export const Textarea = BaseComponent.bind({});
Textarea.args = {
    type: "textarea",
    modelValue: "",
    label: "Сообщение",
};

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const NumberAsyncStory = {
    args: {
        type: "number",
        placeholder: "1234567890",
        modelValue: "",
        inputName: "",
        rules: {},
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const numberInput = canvas.getByPlaceholderText("1234567890", {
            selector: "input",
        });
        await sleep(1000);

        await userEvent.type(numberInput, "9876543210", {
            delay: 300,
        });
    },
};

export const TextAsyncStory = {
    args: {
        type: "text",
        placeholder: "abcde",
        modelValue: "",
        inputName: "",
        rules: {},
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const textInput = canvas.getByPlaceholderText("abcde", {
            selector: "input",
        });

        await sleep(1000);

        await userEvent.type(textInput, "password", {
            delay: 300,
        });
    },
};

export const DifferentAsyncStory = {
    args: {
        type: "text",
        placeholder: "example-email@email.com",
        modelValue: "",
        inputName: "",
        rules: {},
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const passwordInput = canvas.getByPlaceholderText("example-email@email.com", {
            selector: "input",
        });
        await sleep(1000);

        await userEvent.type(passwordInput, "email@email.com", {
            delay: 300,
        });
    },
};

/**Правило ввода данных - длина может быть положительным числом с шагом 0.01 (необходимо нажать ok в спывающем окне*/
export const NumberRulesAsyncStory = {
    args: {
        type: "number",
        placeholder: "0.00",
        modelValue: "",
        inputName: "",
        rules: { regex: /[0-9]+\.?[0-9]{0,2}/ },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const numberInputValue = canvas.getByTestId("input", {
            selector: "input",
        });

        await sleep(1000);

        await userEvent.type(numberInputValue, "0.123", {
            delay: 200,
        });

        await sleep(2000);

        await expect(numberInputValue.value).toBe("0.12");
    },
};

/**Правило ввода данных - длина может быть положительным числом с шагом 0.01*/
export const NumberRules = {
    args: {
        type: "number",
        placeholder: "0.00",
        modelValue: "",
        inputName: "",
        rules: { regex: /[0-9]+\.?[0-9]{0,2}/ },
    },
};

export const Text = {
    args: {
        type: "text",
        placeholder: "abcde",
        modelValue: "",
        inputName: "",
        rules: {},
    },
};

export const Different = {
    args: {
        type: "text",
        placeholder: "fgdgdf",
        modelValue: "",
        inputName: "",
        rules: {},
    },
};
