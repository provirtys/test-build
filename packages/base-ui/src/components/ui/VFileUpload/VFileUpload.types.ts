export type Status = 'uploaded' | 'error' | 'empty';

export type VFileUploadConfig = {
  icon: 'upload' | 'status-error' | 'done';
  hint: string;
  buttonText: string;
};

export interface VFileUploadProps {
  formats?: string[];
  label?: string;
  image?: string;
  required?: boolean;
}
