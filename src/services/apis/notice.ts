import axiosInstance from './axiosInstance';

export async function getshortNotice() {
  try {
    const response = await axiosInstance.get('/short-notices');
    return response.data;
  } catch (error) {
    console.error('Error fetching short notices:', error);
    throw error;
  }
}

export async function getNotices(page = 1, size = 10) {
  try {
    const response = await axiosInstance.get('/notices', {
      params: {
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching notices:', error);
    throw error;
  }
}
