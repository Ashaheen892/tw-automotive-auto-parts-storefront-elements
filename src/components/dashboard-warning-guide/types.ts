export type WarningSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface DashboardWarning {
  id: string;
  name: string;
  iconText: string;
  image: string;
  meaning: string;
  severity: WarningSeverity;
  action: string;
  link: string;
  color: string;
}
