import { defineStore } from 'pinia';
import { ShopService } from 'src/services/shop/shop';
import { ICategories, IProduct } from 'src/types/shop/shop';

export const useShopStore = defineStore('shop', {
  state: () => ({
    cart: {} as { [key: number]: IProduct[] },
    products: [] as IProduct[],
    categories: [] as ICategories[],
  }),
  getters: {
  },
  actions: {
    getProducts(id: number) {
      const res = ShopService.getProducts(id);

      res.then(({ data: data }) => {
        this.products = data;
      })

      return res;
    },

    getCategories() {
      if (this.categories.length > 0) return Promise.resolve();

      const res = ShopService.allCategories();

      res.then(({ data: data }) => {
        this.categories = data;
      })

      return res;
    }
  }
});
