import { CreateAxiosInstanceWithToken } from '../axiosInstanceWithToken';

const axiosInstanceWithToken = CreateAxiosInstanceWithToken();

export async function stampBoardInfo() {
  const response = await axiosInstanceWithToken.get('/stamp');
  return response.data;
}
