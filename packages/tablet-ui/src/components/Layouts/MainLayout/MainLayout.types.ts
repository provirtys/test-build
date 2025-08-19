import type { StatusBarActionProp, StatusBarStatusProp } from '@/components/Complexes/StatusBar/StatusBar.types';

export interface MainLayoutProps {
  title?: string;
  headerAction?: StatusBarActionProp;
  headerStatus?: StatusBarStatusProp;
  isFullscreen?: boolean;
  sidebarHasError?: boolean;
}

export type MainLayoutEmits = (e: 'disable-fullscreen') => void;
