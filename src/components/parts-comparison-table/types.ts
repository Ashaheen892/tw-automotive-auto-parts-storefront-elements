export type ComparisonLayout = 'table' | 'cards';

export type CriteriaKey =
  | 'quality'
  | 'lifespan'
  | 'warranty'
  | 'performance'
  | 'price'
  | 'usage';

export interface PartType {
  id: string;
  name: string;
  badge: string;
  quality: string;
  lifespan: string;
  warranty: string;
  performance: string;
  price: string;
  usage: string;
  highlight: boolean;
  color: string;
}

export interface CriteriaRow {
  key: CriteriaKey;
  label: string;
}
