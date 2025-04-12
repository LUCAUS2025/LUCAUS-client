import axios from 'axios';
// import URL from "../../constants/constants";

// const token = localStorage.getItem('token');
export const URL = 'http://lucaus.kro.kr:8080';

export const getshortNotice = async () => {
  const response = await axios.get(`${URL}/api/short-notices`);
  return response.data;
};

export const getNotices = async (page = 1, size = 10) => {
  const response = await axios.get(`${URL}/api/notices`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
};
