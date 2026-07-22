export interface DrivingCondition {
  id: string;
  name: string;
  icon: string;
  image: string;
  desc: string;
  checks: string[];
  parts: string[];
  maintenance: string[];
  prep: string[];
  link: string;
}

export type ConditionsLayout = 'cards' | 'tabs';
