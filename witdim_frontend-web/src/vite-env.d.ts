/// <reference types="vite/client" />

// Incoming axios {data} object
interface HTTPRequestItemAPI {
  success: boolean;
  data: Item[];
}

// {data: {data}} array objects
interface Item {
  id: string;
  product: string;
  serial: string;
  condition: string;
}

// Item sent for PUT and POST requests
interface FormItem {
  product: string;
  serial: string;
  condition: string;
}
