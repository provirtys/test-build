export type BarChartCodeStatus = 'generated' | 'printed' | 'verified' | 'synced' | 'broken';

export interface BarChartCode {
  code: number;
  status: BarChartCodeStatus;
}

export interface BarChartProps {
  codes: BarChartCode[];
  lastMeter?: number;
}
