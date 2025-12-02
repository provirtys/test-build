export type CodeType = 'barcode' | 'dataMatrix';
export type CodeStatus = 'verified' | 'broken';
export interface CodeCardProps {
    codeType?: CodeType;
    codeText?: string;
    status?: CodeStatus;
    time?: string;
    position?: number;
}
//# sourceMappingURL=CodeCard.types.d.ts.map