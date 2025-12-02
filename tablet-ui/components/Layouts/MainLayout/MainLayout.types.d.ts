import { StatusBarActionProp, StatusBarStatusProp } from '../../Complexes/StatusBar/StatusBar.types';
export interface MainLayoutProps {
    title?: string;
    headerAction?: StatusBarActionProp;
    headerStatus?: StatusBarStatusProp;
    isFullscreen?: boolean;
    sidebarHasError?: boolean;
}
export type MainLayoutEmits = (e: 'disable-fullscreen') => void;
//# sourceMappingURL=MainLayout.types.d.ts.map