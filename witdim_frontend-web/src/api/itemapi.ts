import axios from "axios";

export const getItems = async (): Promise<Items[]> => {
  try {
    const { data } = await axios.get<ItemDatabase>("/api/v1/items");
    if (!data.success) {
      throw new Error("Database failure");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getItemById = async (id: string): Promise<Items[]> => {
  try {
    const { data } = await axios.get<ItemDatabase>(`/api/v1/items/${id}`);
    if (!data.success) {
      throw new Error("Database failure");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getItemsBySearch = async (query: string): Promise<Items[]> => {
  try {
    const encoded = encodeURI(`/api/v1/items/search?q="${query}"`);
    const { data } = await axios.get<ItemDatabase>(encoded);

    if (!data.success) {
      throw new Error("Database failure");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const deleteItemById = async (id: string) => {
  try {
    await axios.delete<Items>(`/api/v1/items/${id}`);
  } catch (error) {}
};
