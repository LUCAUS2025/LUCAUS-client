import { CreateAxiosInstanceWithToken } from '../axiosInstanceWithToken';

interface pushStamp {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

const axiosInstanceWithToken = CreateAxiosInstanceWithToken();

export async function rewardStamp(type: number | string, degree: number, pw: string) {
  try {
    const response = await axiosInstanceWithToken.post<pushStamp>('/stamp/reward', {
      type,
      degree,
      pw,
    });
    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}
