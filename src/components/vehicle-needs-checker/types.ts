export interface QuizOption {
  label: string;
  resultId: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  title: string;
  desc: string;
  link: string;
  ctaLabel: string;
  icon: string;
}
