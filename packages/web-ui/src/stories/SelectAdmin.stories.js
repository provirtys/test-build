import SelectAdmin from "../components/SelectAdmin.vue";

/** Раскрывающийся список в Labeling Admin */
export default {
    title: "web/SelectAdmin",
    component: SelectAdmin,
    tags: ["autodocs"],
    argTypes: {
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

export const SelectDevice = {
    args: {
        options: ["принтер abc123", "принтер 12cde", "принтер bv8fyu"],
        label: "устройство",
    },
};

export const SelectEvent = {
    args: {
        options: ["Создать", "Отменить", "Обновить", "Изменить"],
        label: "событие",
    },
};
export const SelectIpAddress = {
    args: {
        options: ["192.168.123.132", "192.168.123.133", "192.168.123.134", "192.168.123.135", "192.168.123.136"],
        label: "ip-дрес отправителя",
    },
};

export const SelectEmptyLabel = {
    args: {
        options: ["192.168.123.132", "192.168.123.133", "192.168.123.134", "192.168.123.135", "192.168.123.136"],
    },
};
