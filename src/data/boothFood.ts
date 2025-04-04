export interface CommonItem {
  id: number;
  title: string;
  keywords: string[];
  description?: string;
  type: 'booth' | 'foodTruck';
  recommendCount: number;
}

export interface BoothItem extends CommonItem {
  description: string;
}

export type FoodTruckItem = CommonItem;

export const boothTitle = '부스 배치도';
export const boothDescription = '한눈에 보는 부스 배치도와 부스 리스트';
export const foodTruckTitle = '푸드트럭 지도';
export const foodTruckDescription = '매일 10시부터 19시, 맛의 향연을 즐겨보세요!';
