import { useI18n } from "vue-i18n";

export function setupI18n() {
    const { t } = useI18n();
    return { t };
}
