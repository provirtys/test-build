export interface FallbackLoaderProps {
  loadingText?: string;
  fallbackText?: string;
  fallbackIcon?: string;
  updateBtnText?: string;
  isLoading?: boolean;
}

export type FallbackLoaderEmits = (e: 'onUpdate') => void;
