import { FoodTruckItem } from '../../../data/boothFood';
import axiosInstance from '../axiosInstance';

interface FoodTruckListRawData {
  dayBoothNum: number;
  name: string;
  recommendNum: number;
  representMenu: string[];
  location: string;
}

function mapRawToFoodTruckList(rawList: FoodTruckListRawData[]): FoodTruckItem[] {
  return rawList.map((raw) => ({
    dayBoothNum: raw.dayBoothNum,
    name: raw.name,
    recommendNum: raw.recommendNum,
    representMenu: raw.representMenu,
    location: raw.location,
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

export const foodTruckDetailMock = [
  {
    dayFoodTruckNum: 1,
    name: '맛있닭강정',
    cover: 'https://cdn.foodtruck-image.com/sample.jpg',
    location: '104관 뒤편',
    foodTruckId: 202,
    foodTruckReviews: [{ DELICIOUS: 20 }, { RECOMMEND: 10 }, { MANY: 5 }, { FAST: 8 }],
    menus: [{ '닭강정(순한맛)': 6000 }, { '닭강정(매운맛)': 6500 }, { 콜라: 2000 }],
    opDateList: [20240522, 20240523],
  },
];
