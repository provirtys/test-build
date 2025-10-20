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

export type FormInputKey = 'name' | 'moduleName' | 'moduleIp';
