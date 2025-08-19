export type LoadingType = 'loading' | 'photo' | 'connection' | 'check' | 'internet_false' | 'try_again' | 'retry';

export interface LoadingProps {
  loadingType: '' | LoadingType;
}
