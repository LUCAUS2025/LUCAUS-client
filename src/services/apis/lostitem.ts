import axiosInstance from './axiosInstance';

export interface GetLostItemsParams {
  category?: string;
  date?: string;
  page?: number;
  size?: number;
}

export interface LostItem {
  ownerFound: boolean;
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
      params: {
        category: params.category,
        date: params.date,
        page: 1,
        size: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching lost items:', error);
    throw error;
  }
}
