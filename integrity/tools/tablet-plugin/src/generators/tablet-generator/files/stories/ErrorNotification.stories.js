import ErrorNotification from "../components/ErrorNotification.vue";

export default {
    title: "Tablet/ErrorNotification",
    component: ErrorNotification,
    tags: ["autodocs"]
};

export const AccessDenied = {
    args: {
        errorText: 'Доступ запрещен'
    }
};