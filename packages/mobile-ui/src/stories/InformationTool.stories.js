import imageTool from "@assets/images/scan-zone.svg";
import InformationTool from "@components/InformationTool.vue";

const empty = "";
const take = "take";
const returnBtn = "returnBtn";
const btnTypes = { take, returnBtn };
const images = { empty, imageTool };

/** Компонент для отображения информации об инструменте (Mobile). Можно настраивать кнопку Получить/Вернуть
 * и управлять наличием изображения инструмента. Компонент для приложения Inventory мобильной версии
 * (параметры телефона 360х754px/754x336px*/
export default {
    title: "Mobile/InformationTool",
    component: InformationTool,
    tags: ["autodocs"],
    argTypes: {
        parameters: {
            backgrounds: {
                default: "light",
                values: [
                    { name: "dark", value: "#242a2b" },
                    { name: "white", value: "#ffffff" },
                    { name: "light", value: "#ededed" },
                ],
            },
        },
        img: {
            description: "Изображение инструмента",
            options: Object.keys(images),
            mapping: images,
            control: {
                type: "radio",
                labels: {
                    empty: "Без изображения",
                    imageTool: "Изображение инструмента",
                },
            },
        },
        btn: {
            description: "Кнопка",
            options: Object.keys(btnTypes),
            mapping: btnTypes,
            control: {
                type: "radio",
                labels: {
                    take: "Получить",
                    returnBtn: "Вернуть",
                },
            },
        },
    },
};

export const takeToolWithoutImage = {
    args: {
        toolItems: { Название: "Название иструмента 1", Количество: 125 },
        img: "",
        btn: take,
    },
};
export const ToolWithImage = {
    args: {
        toolItems: { Название: "Название иструмента 4", Количество: 12565 },
        img: imageTool,
        btn: take,
    },
};
export const returnToolWithoutImage = {
    args: {
        toolItems: { Название: "Название иструмента 3", Количество: 12578 },
        img: "",
        btn: returnBtn,
    },
};
export const returnToolWithImage = {
    args: {
        toolItems: { Название: "Название иструмента 4", Количество: 12565 },
        img: imageTool,
        btn: returnBtn,
    },
};
