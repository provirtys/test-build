import JobTemplate from "@components/JobTemplate.vue";

/** Страница для создания шаблона задания с генерацией DataMatrix кода. Максимальное количество атрибутов для добавления 10. Динамическое добавление/редактирование/удаление атрибутов */
export default {
    title: "web/JobTemplate",
    component: JobTemplate,
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

/** Создание шаблона*/
export const CreateTemplate = {
    args: {},
};
