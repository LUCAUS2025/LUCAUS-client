import { CreateAxiosInstanceWithToken } from '../axiosInstanceWithToken';

interface gameStamp {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

const axiosInstanceWithToken = CreateAxiosInstanceWithToken();

export async function gameStamp(type: number | string, stampBoothIdInput: number, pw: string) {
  try {
    let stampBoothId;
    if (type == 2) {
      stampBoothId = stampBoothIdInput - 10;
    } else {
      stampBoothId = stampBoothIdInput;
    }
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
