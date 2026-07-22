export type MeterStatus = 'excellent' | 'good' | 'check' | 'service';

export interface HealthMeter {
  id: string;
  name: string;
  value: number;
  status: MeterStatus;
  icon: string;
  note: string;
  link: string;
}

export type MeterDisplay = 'circles' | 'bars';
