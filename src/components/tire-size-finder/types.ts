export type TireTypeId = string;

export interface TireTypeOption {
  id: string;
  name: string;
  desc: string;
}

export interface TireSizeRow {
  id: string;
  width: string;
  aspect: string;
  rim: string;
  typeId: string;
  label: string;
}
