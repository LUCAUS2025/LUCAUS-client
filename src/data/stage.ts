export interface CommonItem {
  id: number;
  title: string;
  keywords: string[];
  description?: string;
  type: 'booth' | 'foodTruck';
}
