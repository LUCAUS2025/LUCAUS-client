import { AxiosError } from 'axios';
import axiosInstance from '../axiosInstance';

interface BoothReviewPostResult {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export async function postBoothReview(boothId: number, boothReviewTags: string[]) {
  try {
    const response = await axiosInstance.post<BoothReviewPostResult>(`/booth/review/${boothId}`, {
      boothReviewTags,
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
