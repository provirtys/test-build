import type { VTableEmitsRequest } from '../../ui/VTable';
import type { ModuleItem } from '../LineForm';

export interface LineInfoProps {
  id: string;
  name: string;
  status: string;
  modules: ModuleItem[];
}

export type VLineInfoEmits = {
  (e: 'navigate', data: VTableEmitsRequest): void;
  (e: 'delete'): void;
  (e: 'edit'): void;
};
