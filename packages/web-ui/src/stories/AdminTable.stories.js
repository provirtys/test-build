import AdminTable from "@components/AdminTable.vue";

export default {
    title: "web/AdminTable",
    component: AdminTable,
    tags: ["autodocs"],
    argTypes: {
        nameTable: {
            description: "Название таблицы",
        },
        parameters: {
            backgrounds: {
                default: "white",
                values: [
                    { name: "dark", value: "#242a2b" },
                    { name: "white", value: "#ffffff" },
                    { name: "light", value: "#ededed" },
                ],
            },
        },
    },
};

export const PrimaryList = {
    args: {
        rows: [
            {
                id: "12345", // from uuid
                title: "тестовая задача 1", // from title
                amount: 10, // from total
                device: "принтер abc123",
                status: "new", // from status
                updatedAt: new Date(2024, 3, 4, 15, 20, 10), // from updatedAt
            },
            {
                id: "53496",
                title: "тестовая задача 2",
                amount: 27,
                device: "принтер abc123",
                status: "new",
                updatedAt: new Date(2024, 3, 1, 17, 37, 29),
            },
            {
                id: "32495",
                title: "тестовая задача 3",
                amount: 14,
                device: "принтер 12cde",
                status: "labeling",
                updatedAt: new Date(2024, 2, 27, 14, 54, 8),
            },
            {
                id: "34960",
                title: "тестовая задача 4",
                amount: 40,
                device: "принтер bv8fyu",
                status: "new",
                updatedAt: new Date(2024, 2, 25, 16, 11, 42),
            },
        ],

        columns: [
            {
                name: "title",
                label: "Название задания",
                align: "left",
                field: "title",
                headerClasses: "table-header",
                classes: "dark-text regular",
            },
            {
                name: "amount",
                label: "Количество продукции",
                align: "left",
                field: "amount",
                headerClasses: "table-header",
                classes: "dark-text regular",
            },
            {
                name: "device",
                label: "Устройство",
                align: "left",
                field: "device",
                headerClasses: "table-header",
                classes: "dark-text regular",
            },
            {
                name: "status",
                label: "Статус",
                align: "left",
                field: "status",
                headerClasses: "table-header",
                classes: "dark-text regular",
            },
            {
                name: "updatedAt",
                label: "Обновлено",
                align: "left",
                field: "updatedAt",
                headerClasses: "table-header",
                classes: "dark-text regular",
            },
            {
                name: "actions",
                label: "",
                align: "left",
                field: "actions",
                headerClasses: "table-header actions",
                classes: "dark-text regular text-right",
            },
        ],

        nameTable: "Задания",
    },
};
