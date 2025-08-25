export interface InputOption {
  label: string;
  value: string;
  resetFn?(this: InputOption): void;
}

export interface ButtonOption {
  label: string;
  fn(): void;
  loading?: boolean;
}

export interface FlagOption {
  label: string;
  value: boolean;
}

export type AppSettingsOptionsItems = {
  inputs?: Record<string, InputOption>;
  buttons?: Record<string, ButtonOption>;
  flags?: Record<string, FlagOption>;
};

export interface AppSettingsOptionsProps {
  options: AppSettingsOptionsItems;
}
