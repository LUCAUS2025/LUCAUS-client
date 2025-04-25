import axiosInstance from '../axiosInstance';

interface SignupResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export async function signup(id: string, pw: string, name: string, studentId: string) {
  try {
    const response = await axiosInstance.post<SignupResponse>('/auth/signup', {
      id,
      pw,
      name,
      studentId,
    });
    return response.data;
  } catch (error) {
    if (error) throw error;
  }
}
