import { storeToRefs } from 'pinia';
import { useShopStore } from 'src/stores/shop.store';
import { IProduct } from 'src/types/shop/shop';
import { notifySuccess } from './useNotification';

export const useCart = () => {
  const shopStore = useShopStore();
  const { cart } = storeToRefs(shopStore);

  const addToCart = (product: IProduct) => {
    if (cart.value[product.id]) {
      const cartAmount = Number(cart.value[product.id].cart_amount)
      const stockAmount = Number(cart.value[product.id].stock_amount)

      if (cartAmount >= stockAmount) {
        return Promise.reject(`There is no more ${product.name} in stock`);
      }

      cart.value[product.id].cart_amount = cartAmount + 1;
      return Promise.resolve(`${product.name} added to cart`);
    }

    const res = shopStore.getProductStock(product.id);

    res.then(({ data: data }) => {
      const productWithAmount = {
        ...product,
        stock_amount: data.amount,
        cart_amount: 1,
      }

      cart.value[product.id] = productWithAmount
    })
    return Promise.resolve(`${product.name} added to cart`);
  }

  const removeFromCart = (product: IProduct): void => {
    if (!cart.value[product.id] || !cart.value[product.id].cart_amount) return;

    const cartAmount = Number(cart.value[product.id].cart_amount)

    if (cartAmount < 1) {
      delete cart.value[product.id];
      return;
    }

    cart.value[product.id].cart_amount = cartAmount - 1;
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
