import axiosInstance from '../axiosInstance';

interface loginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export async function login(id: string, pw: string) {
  try {
    const response = await axiosInstance.post<loginResponse>('/auth/login', {
      id,
      pw,
    });
    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}
