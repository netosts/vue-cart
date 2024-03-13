import { api } from 'src/boot/axios';

export class ShopService {
  public static getProducts(id: number) {
    return api.get(`/products?category_id=${id}`);
  }

  public static allCategories() {
    return api.get('/categories')
  }

  public static getProductStock(id: number) {
    return api.get(`/stock/${id}`)
  }
}
