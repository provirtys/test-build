import { setup } from "@storybook/vue3-vite";
import { Quasar } from "quasar";
import { createI18n } from "vue-i18n";

import "../src/css/main.scss";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "quasar/dist/quasar.css";
import en from "../src/locales/en.json";
import ru from "../src/locales/ru.json";

function loadLocaleMessages() {
    const locales = [{ en }, { ru }];
    const messages = {};
    for (const lang of locales) {
        const key = Object.keys(lang)[0];
        messages[key] = lang[key];
    }
    return messages;
}

const i18n = createI18n({
    locale: navigator.language.split("-")[0] || "en",
    fallbackLocale: "en",
    globalInjection: true,
    legacy: false,
    messages: loadLocaleMessages(),
});

setup((app) => {
    app.use(i18n);
    app.use(Quasar, {});
});

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    tags: ["autodocs"],
};

export default preview;
