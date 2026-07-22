export type TrustLayout = 'tabs' | 'accordion' | 'cards';

export interface TrustItem {
  id: string;
  title: string;
  icon: string;
  body: string;
  image: string;
  link: string;
  linkLabel: string;
}
