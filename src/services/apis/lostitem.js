import axios from 'axios';

export const URL = 'http://lucaus.kro.kr:8080';

export const getAllLostItemsByParams = async ({ category, date, page = 1, size = 10 }) => {
  try {
    const response = await axios.get(`${URL}/api/lost-items`, {
      params: {
        category, // 예: 'DAILY_NECESSITIES'
        date, // 예: '2025-04-12'
        page, // 예: 1
        size, // 예: 10
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching lost items:', error);
    throw error;
  }
};
