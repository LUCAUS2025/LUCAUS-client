import { CreateAxiosInstanceWithToken } from '../axiosInstanceWithToken';

interface gameStamp {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

const axiosInstanceWithToken = CreateAxiosInstanceWithToken();

export async function gameStamp(type: number | string, stampBoothId: number, pw: string) {
  try {
    const response = await axiosInstanceWithToken.post<gameStamp>('/stamp/stamp-booth', {
      type,
      stampBoothId,
      pw,
    });
    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}
