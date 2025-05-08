import { BoothItem, BoothOrFoodTruckItem } from '../../../data/boothFood';
import axiosInstance from '../axiosInstance';

interface BoothListRawData {
  dayBoothNum: number;
  name: string;
  recommendNum: number;
  owner: string;
  categories: string[];
  location: string;
}

function mapRawToBoothList(rawList: BoothListRawData[]): BoothItem[] {
  return rawList.map((raw) => ({
    dayBoothNum: raw.dayBoothNum,
    name: raw.name,
    owner: raw.owner,
    categories: raw.categories,
    recommendNum: raw.recommendNum,
    location: raw.location,
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
    return mapRawToBoothList(response.data.result);
  } catch (error) {
    if (error) throw error;
  }
}
