/// <reference types="vite/client" />

interface ItemDatabase {
  success: boolean;
  data: Items[];
}

interface Items {
  id: string;
  product: string;
  serial: string;
  condition: string;
}
