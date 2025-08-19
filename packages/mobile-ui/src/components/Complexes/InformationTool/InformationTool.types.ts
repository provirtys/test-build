export type BtnType = 'get' | 'return';

export interface InformationToolProps {
  attributes?: Record<string, string | number>;
  img?: string;
  btn?: BtnType;
}
