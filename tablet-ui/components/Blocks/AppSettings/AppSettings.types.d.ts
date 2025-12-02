import { AppSettingsOptionsItems } from './AppSettingsOptions/AppSettingsOptions.types';
export interface AppSettingsConf {
    userSettings?: AppSettingsOptionsItems;
    devSettings?: AppSettingsOptionsItems;
    devMode?: boolean;
}
export interface AppSettingsProps {
    options: AppSettingsConf;
    isDisabled?: boolean;
}
export type AppSettingsEmits = (e: 'update:options', val: AppSettingsConf) => void;
//# sourceMappingURL=AppSettings.types.d.ts.map