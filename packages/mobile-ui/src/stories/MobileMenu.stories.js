import MobileMenu from "@components/MobileMenu.vue";

/** Компонент навигационного меню, используемый на мобильных устройствах. Содержит 4 иконки разделов с подписями.
 * В зависимости от текущего раздела или цвета фона меняются цвета иконок. */
export default {
    title: "Mobile/Menu",
    component: MobileMenu,
    argTypes: {
        currentPage: {
            description: "На какой странице находится пользователь?",
            control: {
                type: "select",
            },
            options: [
                "Index",
                "FrontPage",
                "Checking",
                "CheckScan",
                "CheckResult",
                "History",
                "Profile",
                "ProfileAuth",
                "ProfileRegister",
                "ProfileEdit",
                "BindingCodeScan",
                "BindingCodeConfirm",
            ],
        },
        isBackgroundDark: {
            description: "Фон на странице темный?",
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

/** Навигационное меню на главной. */
export const FrontPageMenu = {
    args: {
        isBackgroundDark: false,
        currentPage: "FrontPage",
    },
};

/** Навигационное меню на страницах сканирования ("Checking", "CheckScan", "CheckResult"). На странице CheckScan предусмотрен темный фон. */
export const CheckScanMenu = {
    args: {
        isBackgroundDark: true,
        currentPage: "CheckScan",
    },
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
            ],
        },
    },
};

/** Навигационное меню страницы "История". */
export const HistoryMenu = {
    args: {
        isBackgroundDark: false,
        currentPage: "History",
    },
};

/** Навигационное меню страницы "Профиль" (в том числе регистрация, авторизация и другие разделы, связанные с аккаунтом). */
export const ProfileMenu = {
    args: {
        isBackgroundDark: false,
        currentPage: "Profile",
    },
};
