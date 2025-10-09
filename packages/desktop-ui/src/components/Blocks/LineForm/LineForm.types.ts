import type { VInputProps } from '@integrity/base-ui/src';

type InputProps = Omit<VInputProps, 'modelValue'>;

export interface ModuleItem {
  name: string;
  ip: string;
}

export interface LineItem {
  uuid: string;
  name: string;
  modules: ModuleItem[];
}

export interface LineFormProps {
  line?: Partial<LineItem>;
  mode?: 'new' | 'edit';
  loading?: boolean;
}

export type LineFormEmits = (e: 'submit', data: Omit<LineItem, 'uuid'>) => void;

export type FieldSettings = {
  name: InputProps;
  moduleName: InputProps;
  moduleIp: InputProps;
};

export type LineFormFieldProps = (name: keyof FieldSettings) => InputProps;
