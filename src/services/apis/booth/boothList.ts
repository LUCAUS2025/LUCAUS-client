import { BoothItem, BoothOrFoodTruckItem } from '../../../data/boothFood';
import axiosInstance from '../axiosInstance';

interface BoothListRawData {
  dayBoothNum: number;
  name: string;
  recommendNum: number;
  info: string;
  categories: string[];
}

export function mapRawToBoothList(rawList: BoothListRawData[]): BoothItem[] {
  return rawList.map((raw) => ({
    dayBoothNum: raw.dayBoothNum,
    name: raw.name,
    info: raw.info,
    categories: raw.categories,
    recommendNum: raw.recommendNum,
    type: 'booth',
  }));
}

interface BoothList {
  isSuccess: boolean;
  code: string;
  message: string;
  result: BoothListRawData[];
}

export async function fetchBoothList(date: number) {
  try {
    const response = await axiosInstance.get<BoothList>(`/booth/${date}`);
    console.log(response.data);
    return mapRawToBoothList(response.data.result);
  } catch (error) {
    if (error) throw error;
  }
}
