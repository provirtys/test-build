import buttonDeleteUrl from "@assets/images/button-delete.svg";
import buttonEditUrl from "@assets/images/button-edit.svg";
import buttonLogoutUrl from "@assets/images/button-logout.svg";
import buttonSyncUrl from "@assets/images/button-sync.svg";
import MobileButton from "@components/MobileButton.vue";

const empty = "";
const red = "red";
const dark = "dark";
const gray = "dark-grey";
const icons = { empty, buttonDeleteUrl, buttonEditUrl, buttonLogoutUrl, buttonSyncUrl };
const colors = { red, dark, gray };

/** Компонент кнопки, используемый на мобильных устройствах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки. Если в кнопке есть иконка, то текст выравнивается не по центру, а по левому краю, иконка
 * располагается справа. Серый цвет кнопки также меняет цвет текста на темный. */
export default {
    title: "Mobile/Button",
    component: MobileButton,
    tags: ["autodocs"],
    argTypes: {
        color: {
            description: "Цвет кнопки.",
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: "radio",
                labels: {
                    red: "Красный",
                    dark: "Темный",
                    gray: "Серый",
                },
            },
        },
        icon: {
            description: "Иконка.",
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: "radio",
                labels: {
                    empty: "Без иконки",
                    buttonDeleteUrl: "Удалить",
                    buttonEditUrl: "Редактировать",
                    buttonLogoutUrl: "Выйти",
                    buttonSyncUrl: "Синхронизировать",
                },
            },
        },
        text: {
            description: "Текст кнопки.",
        },
    },
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
            ],
        },
    },
};

/** Стандартная кнопка. */
export const PrimaryButton = {
    args: {
        text: "Сканировать код",
        color: "red",
    },
};

/** Кнопка синхронизации. */
export const SyncButton = {
    args: {
        text: "Синхронизировать",
        color: "dark-grey",
        icon: buttonSyncUrl,
    },
};

/** Кнопка удаления. */
export const DeleteButton = {
    args: {
        text: "Очистить локальную базу",
        color: "dark-grey",
        icon: buttonDeleteUrl,
    },
};

/** Кнопка редактирования. */
export const EditButton = {
    args: {
        text: "Редактировать профиль",
        color: "dark-grey",
        icon: buttonEditUrl,
    },
};

/** Кнопка выхода. */
export const LogoutButton = {
    args: {
        text: "Выйти из профиля",
        color: "dark",
        icon: buttonLogoutUrl,
    },
};
