export type GuideMode = 'tires' | 'batteries' | 'both';

export interface TirePart {
  key: string;
  label: string;
  value: string;
  note: string;
}

export interface BatterySpec {
  id: string;
  label: string;
  value: string;
  note: string;
}

export interface ParsedTireCode {
  width: string;
  aspect: string;
  construction: string;
  rim: string;
  raw: string;
}
