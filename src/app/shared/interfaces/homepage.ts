export interface Banner {
  id: number;
  brief: string;
  image: string;
  order: number;
  title: string;
  category: string;
  colorCode: string;
}
export interface Course {
  id: string;
  hours: number;
  image: string;
  level: string;
  price: number;
  title: string;
  author: string;
  category: string;
  discount: number;
  lectures: number;
  addToCart: boolean;
  categoryID: number;
  description: string;
  ratingCount: number;
  showOnHomepage: boolean;
}
export interface Category {
  id: string;
  name: string;
}
