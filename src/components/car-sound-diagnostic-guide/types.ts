export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';

export interface SoundCase {
  id: string;
  name: string;
  icon: string;
  description: string;
  causes: string[];
  severity: SeverityLevel;
  advice: string;
  audioUrl: string;
  videoUrl: string;
  link: string;
}
