export type CodeType = 'barcode' | 'dataMatrix';

export interface CodeStepsProps {
  codeType: CodeType;
  currentCodeIndex: number;
  codesLength: number;
  showBorder: boolean;
}
