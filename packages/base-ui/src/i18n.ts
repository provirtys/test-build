import { type Composer, useI18n } from 'vue-i18n';

export function setupI18n(): { t: Composer['t'] } {
  const { t } = useI18n();
  return { t };
}
