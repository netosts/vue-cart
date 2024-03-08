import { api } from 'src/boot/axios';

export class ShopService {
  public static allElectronics() {
    return api.get('/products?category_id=1')
  }

  public static allClothings() {
    return api.get('/products?category_id=2')
  }

  public static allHousewares() {
    return api.get('/products?category_id=3')
  }
}
