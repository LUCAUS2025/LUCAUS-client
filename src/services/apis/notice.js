import axios from "axios";
// import URL from "../../constants/constants";

const token = localStorage.getItem("token");

// export const getshortNotice = async () => {
//   try {
//     const response = await axios.get(`${URL}/map/${}`);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch all snowman data", error);
//     throw error;
//   }
// };