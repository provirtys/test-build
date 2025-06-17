import JobCreate from "@components/JobCreate.vue";

/** Страница для создания нового задания. Максимальное количество атрибутов для добавления 10. Динамическое добавление/редактирование/удаление атрибутов */
export default {
    title: "web/JobCreate",
    component: JobCreate,
    tags: ["autodocs"],
    argTypes: {
        parameters: {
            backgrounds: {
                default: "white",
                values: [
                    { name: "white", value: "#ffffff" },
                    { name: "dark", value: "#242a2b" },
                    { name: "light", value: "#f8f9fb" },
                ],
            },
        },
    },
};

/** Создание задачи*/
export const CreateTask = {
    args: {},
};
