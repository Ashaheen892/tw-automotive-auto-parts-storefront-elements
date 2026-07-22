export interface MaintenanceMilestone {
  id: string;
  km: number;
  title: string;
  services: string[];
  icon: string;
  link: string;
  note: string;
}

export type MilestoneStatus = 'done' | 'due' | 'upcoming' | 'neutral';
