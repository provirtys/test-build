export interface BoxTemplateItem {
  id: string;
  name: string;
  x: number;
  y: number;
  layers: number;
}

export interface BoxTemplateFormProps {
  box?: Partial<BoxTemplateItem>;
  mode?: 'new' | 'edit';
  loading?: boolean;
}

export type BoxTemplateFormEmits = (e: 'submit', data: Omit<BoxTemplateItem, 'id'>) => void;

export type FormInputKey = Exclude<keyof BoxTemplateItem, 'id'>;
