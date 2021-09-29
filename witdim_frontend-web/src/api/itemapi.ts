import axios from "axios";

// ALL THESE REQUESTS NEED PROPER ERROR HANDLING WITH FRONTEND UI NOTIFICATIONS!
// DONT JUST KEEP THROWING CONSOLE ERRORS!!

// ALL ROUTES WILL REQUIRE AUTHENTICATION!!!!
// WILL NEED TO ADD AUTH COOKIE PASS TO ALL AXIOS REQUESTS

/**
 * @desc Get all items
 * @format /api/v1/items
 * @method GET
 * @access Private
 */
export const getItems = async (): Promise<Item[]> => {
  try {
    const { data } = await axios.get<HTTPRequestItemAPI>("/api/v1/items");
    if (!data.success) {
      throw new Error("Database failure");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/**
 * @desc Get single item by id
 * @format /api/v1/items/:id
 * @method GET
 * @access Private
 */
export const getItemById = async (id: string): Promise<Item[]> => {
  try {
    const { data } = await axios.get<HTTPRequestItemAPI>(`/api/v1/items/${id}`);
    if (!data.success) {
      throw new Error("Database failure");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/**
 * @desc Get items by seacrh query
 * @format /api/v1/items/search?q=""
 * @method GET
 * @access Private
 */
export const getItemsBySearch = async (query: string): Promise<Item[]> => {
  try {
    const encoded = encodeURI(`/api/v1/items/search?q="${query}"`);
    const { data } = await axios.get<HTTPRequestItemAPI>(encoded);

    if (!data.success) {
      throw new Error("Database failure");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/**
 * @desc Create new item
 * @format /api/v1/items
 * @method POST
 * @access Private
 */
export const createItem = async (item: FormItem) => {
  try {
    const { data } = await axios.post<HTTPRequestItemAPI>(
      "/api/v1/items",
      item
    );
    if (!data.success) {
      throw new Error("Database failure");
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/**
 * @desc Update item by id
 * @format /api/v1/items/:id
 * @method PUT
 * @access Private
 */
export const updateItemById = async (item: Item) => {
  try {
    const { data } = await axios.put<HTTPRequestItemAPI>(
      `/api/v1/items/${item.id}`,
      item
    );
    if (!data.success) {
      throw new Error("Database failure");
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/**
 * @desc Delete item by id
 * @format /api/v1/items/:id
 * @method DELETE
 * @access Private
 */
export const deleteItemById = async (id: string) => {
  try {
    const { data } = await axios.delete<HTTPRequestItemAPI>(
      `/api/v1/items/${id}`
    );
    if (!data.success) {
      throw new Error("Database failure");
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};
