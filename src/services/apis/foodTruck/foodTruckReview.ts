import { AxiosError } from 'axios';
import axiosInstance from '../axiosInstance';

interface FoodTruckReviewPostResult {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export async function postFoodTruckReview(foodTruckId: number, foodTruckReviewTags: string[]) {
  try {
    const response = await axiosInstance.post<FoodTruckReviewPostResult>(`/food-truck/review/${foodTruckId}`, {
      foodTruckReviewTags,
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    return {
      isSuccess: false,
      message: axiosError.response?.data?.message || '알 수 없는 오류가 발생했습니다.',
      result: '',
    };
  }
}
