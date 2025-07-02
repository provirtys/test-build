import { GeneratedDatamatrix } from "@base";
import { computed } from "vue";

/** Компонент для генерации Datamatrix изображения на основе получаемого сообщения. Можно менять размер изображения и переключать светлый/темный режим. */

export default {
    title: "GeneratedDatamatrix",
    component: GeneratedDatamatrix,
    argTypes: {
        data: {
            description: "Сообщение для генерации",
        },
        size: {
            description: "Размер изображения",
            control: {
                type: "number",
            },
        },
        darkMode: {
            description: "Темный режим",
            control: {
                type: "boolean",
            },
        },
    },
    args: {
        data: false,
        size: 180,
        darkMode: false,
    },
};

const BaseComponent = (args) => ({
    components: { GeneratedDatamatrix },
    setup() {
        const componentKey = computed(() => JSON.stringify(args.data) + args.darkMode);
        return { args, componentKey };
    },
    template: `<generated-datamatrix :key="componentKey" :data="args.data" :size="args.size" :dark-mode="args.darkMode" />`,
});

export const Standard = BaseComponent.bind({});
Standard.args = {
    data: {
        name: "Вода Артезианская 1 л.",
        stackSize: 6,
        palletSize: 100,
    },
};

export const DarkMode = BaseComponent.bind({});
DarkMode.args = {
    data: {
        name: "Вода Артезианская 1 л.",
        stackSize: 6,
        palletSize: 100,
    },
    darkMode: true,
};
DarkMode.globals = {
    backgrounds: { value: "dark" },
};
