import { FoodTruckItem } from '../../../data/boothFood';
import axiosInstance from '../axiosInstance';

interface FoodTruckListRawData {
  dayBoothNum: number;
  name: string;
  recommendNum: number;
  representMenu: string[];
}

function mapRawToFoodTruckList(rawList: FoodTruckListRawData[]): FoodTruckItem[] {
  return rawList.map((raw) => ({
    dayBoothNum: raw.dayBoothNum,
    name: raw.name,
    recommendNum: raw.recommendNum,
    representMenu: raw.representMenu,
    type: 'foodTruck',
  }));
}

interface FoodTruckList {
  isSuccess: boolean;
  code: string;
  message: string;
  result: FoodTruckListRawData[];
}

export async function fetchFoodTruckList(date: number) {
  try {
    const response = await axiosInstance.get<FoodTruckList>(`/food-truck/${date}`);
    return mapRawToFoodTruckList(response.data.result);
  } catch (error) {
    if (error) throw error;
  }
}
