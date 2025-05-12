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

function categoriesMapping(categoryList: string[]) {
  return categoryList.map((item: string) => {
    switch (item) {
      case 'SALE':
        return '물품 판매';
      case 'CONCERT':
        return '소 연주회';
      case 'FOOD_SALE':
        return '음식 판매';
      case 'EVENT_GAME':
        return '이벤트 / 게임';
      case 'EXPERIENCE':
        return '체험 / 홍보';
      case 'CAMPAIGN':
        return '캠페인';
      case 'STUDENT_ACTIVITY':
        return '학생 교류 행사 및 학생회 사업';
      default:
        return item;
    }
  });
}

function mapRawToBoothList(rawList: BoothListRawData[]): BoothItem[] {
  return rawList.map((raw) => ({
    dayBoothNum: raw.dayBoothNum,
    name: raw.name,
    owner: raw.owner,
    categories: categoriesMapping(raw.categories),
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
