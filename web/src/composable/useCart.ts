import { storeToRefs } from 'pinia';
import { useShopStore } from 'src/stores/shop.store';
import { IProduct } from 'src/types/shop/shop';
import { notifySuccess } from './useNotification';

export const useCart = () => {
  const shopStore = useShopStore();
  const { cart } = storeToRefs(shopStore);

  const addToCart = (product: IProduct) => {
    if (cart.value[product.id]) {
      if (cart.value[product.id].length === cart.value[product.id][0].amount) {
        return Promise.reject(`There is no more ${product.name} in stock`);
      }
      cart.value[product.id] = cart.value[product.id]
        .concat([cart.value[product.id][0]])
      return Promise.resolve(`${product.name} added to cart`);
    }

    const res = shopStore.getProductStock(product.id);

    res.then(({ data: data }) => {
      const productWithAmount = {
        ...product,
        amount: data.amount
      }

      cart.value[product.id] = [productWithAmount]
    })

    return Promise.resolve(`${product.name} added to cart`);
  }

  const removeFromCart = (product: IProduct) => {
    cart.value[product.id].pop();

    if (cart.value[product.id].length === 0) {
      delete cart.value[product.id];
    }
  }

  const deleteFromCart = (product: IProduct) => {
    delete cart.value[product.id];
    notifySuccess(`${product.name} deleted from cart`);
  }

  return {
    addToCart,
    removeFromCart,
    deleteFromCart
  }
}
