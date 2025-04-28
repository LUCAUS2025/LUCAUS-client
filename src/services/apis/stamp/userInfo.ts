import { CreateAxiosInstanceWithToken } from '../axiosInstanceWithToken';

const axiosInstanceWithToken = CreateAxiosInstanceWithToken();

export async function userInfo() {
  const response = await axiosInstanceWithToken.get('/user');
  return response.data;
}
