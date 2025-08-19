import type { AppSettingsOptionsItems } from '@/components/Blocks/AppSettings/AppSettingsOptions/AppSettingsOptions.types';

export interface AppSettings {
  userSettings?: AppSettingsOptionsItems;
  devSettings?: AppSettingsOptionsItems;
  devMode?: boolean;
}

export interface AppSettingsProps {
  options: AppSettings;
  isDisabled?: boolean;
}

export type AppSettingsEmits = (e: 'update:options', val: AppSettings) => void;
