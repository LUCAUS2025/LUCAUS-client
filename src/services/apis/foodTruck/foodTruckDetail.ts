import axiosInstance from '../axiosInstance';

export type FoodTruckReviewItem = { DELICIOUS: number } | { RECOMMEND: number } | { MANY: number } | { FAST: number };

export type FoodTruckMenuItem = { [menuName: string]: number };

export interface FoodTruckDetailRawData {
  dayFoodTruckNum: number;
  name: string;
  cover: string;
  location: string;
  foodTruckReviews: FoodTruckReviewItem[];
  menus: FoodTruckMenuItem[];
  foodTruckId: number;
}

interface FoodTruckDetail {
  isSuccess: boolean;
  code: string;
  message: string;
  result: FoodTruckDetailRawData[];
}

export async function fetchFoodTruckDetail(date: number, dayFoodTruckNum: number) {
  try {
    const response = await axiosInstance.get<FoodTruckDetail>(`/food-truck/${date}/${dayFoodTruckNum}`);
    return response.data.result;
  } catch (error) {
    if (error) throw error;
  }
}
