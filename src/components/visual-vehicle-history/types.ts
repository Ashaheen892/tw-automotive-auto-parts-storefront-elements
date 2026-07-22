export interface HistoryEvent {
  id: string;
  date: string;
  km: number;
  title: string;
  category: string;
  image: string;
  note: string;
  documentUrl: string;
  nextService: string;
  order: number;
}

export type HistoryLayout = 'vertical' | 'horizontal';
