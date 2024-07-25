export interface StatItem {
  svg: any;
  title: string;
  total: number;
}

export interface StatCardProps {
  item: StatItem;
  index: number;
}
