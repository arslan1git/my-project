export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
    originalPrice?: number;
    rating: number; // Rating out of 5
  }
  