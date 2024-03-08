import { defineStore } from 'pinia';
import { ShopService } from 'src/services/shop/shop';
import { IProduct } from 'src/types/shop/shop';

export const useShopStore = defineStore('shop', {
  state: () => ({
    cart: null,
    electronicItems: [] as IProduct[],
    clothingItems: [] as IProduct[],
    housewareItems: [] as IProduct[],
  }),
  getters: {
  },
  actions: {
    getElectronics() {
      if (this.electronicItems.length > 0) return;

      const res = ShopService.allElectronics();

      res.then(({ data: data }) => {
        this.electronicItems = data;
      })

      return res;
    },
    getClothings() {
      if (this.clothingItems.length > 0) return;

      const res = ShopService.allClothings();

      res.then(({ data: data }) => {
        this.clothingItems = data;
      })

      return res;
    },
    getHousewares() {
      if (this.housewareItems.length > 0) return;

      const res = ShopService.allHousewares();

      res.then(({ data: data }) => {
        this.housewareItems = data;
      })

      return res;
    },
  }
});
