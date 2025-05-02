import axiosInstance from './axiosInstance';

export interface GetLostItemsParams {
  category?: string;
  date?: string;
  page?: number;
  size?: number;
}

export interface LostItem {
  category: string;
  name: string;
  updatedDateTime: string;
  photoUrl: string;
  place: string;
}

export interface GetLostItemsResponse {
  result: {
    content: LostItem[];
  };
}

export async function getLostItems(params: GetLostItemsParams): Promise<GetLostItemsResponse> {
  try {
    const response = await axiosInstance.get<GetLostItemsResponse>('/lost-items', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching lost items:', error);
    throw error;
  }
}
