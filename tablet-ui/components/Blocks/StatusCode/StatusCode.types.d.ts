export type CodeType = 'dataMatrix' | 'barcode';
export type CodeStatus = 'hidden' | 'active' | 'processing';
export type CodeColor = 'info' | 'success' | 'error' | 'warning';
export interface StatusCodeProps {
    type: CodeType;
    status?: CodeStatus;
    color?: CodeColor;
}
//# sourceMappingURL=StatusCode.types.d.ts.map