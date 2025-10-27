export interface Product {
updatedAt: string|number|Date;
createdAt: string|number|Date;
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  brand: string;
  images: string[];
  stock: number;
  rating: number;
  numReviews: number;
  attributes: {
    color: string;
    material: string;
    warranty: string;
  };
  isFeatured: boolean;
  categoryId?: {
    _id: string;
    name: string;
  };
}
