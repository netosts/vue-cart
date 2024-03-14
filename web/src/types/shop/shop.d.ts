export interface IProduct {
  id: number;
  category_id: number;
  name: string,
  description: string,
  price: number,
  image: string,
  amount?: number,
}

export interface ICategories {
  id: number;
  name: string,
  slug: string
}
