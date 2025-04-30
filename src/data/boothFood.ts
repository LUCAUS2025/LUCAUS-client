export interface CommonItem {
  dayBoothNum: number;
  name: string;
  recommendNum: number;
  type: 'booth' | 'foodTruck';
}

export interface BoothItem extends CommonItem {
  info: string;
  categories: string[];
  type: 'booth';
}

export interface FoodTruckItem extends CommonItem {
  representMenu: string[];
  type: 'foodTruck';
}

export type BoothOrFoodTruckItem = BoothItem | FoodTruckItem;
