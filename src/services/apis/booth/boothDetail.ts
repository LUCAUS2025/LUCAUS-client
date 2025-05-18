import axiosInstance from '../axiosInstance';

export type BoothReviewItem = { DELICIOUS: number } | { BENEFICIAL: number } | { FUN: number } | { RECOMMEND: number };

export interface BoothDetailRawData {
  dayBoothNum: number;
  name: string;
  owner: string;
  info: string;
  cover: string;
  location: string;
  categories: string[];
  boothReview: BoothReviewItem[];
  boothId: number;
  opDateList: number[];
  opTimeStart: number;
  opTimeEnd: number;
}

interface BoothDetail {
  isSuccess: boolean;
  code: string;
  message: string;
  result: BoothDetailRawData[];
}

export async function fetchBoothDetail(date: number, dayBoothNum: number) {
  try {
    const response = await axiosInstance.get<BoothDetail>(`/booth/${date}/${dayBoothNum}`);
    return response.data.result;
  } catch (error) {
    if (error) throw error;
  }
}
