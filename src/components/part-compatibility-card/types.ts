export interface CompatibilityField {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface FormValues {
  brand: string;
  model: string;
  year: string;
  engine: string;
  vin: string;
  partNumber: string;
  custom: Record<string, string>;
}

export interface SummaryChip {
  label: string;
  value: string;
}
