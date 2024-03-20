<template>
  <q-icon name="remove_circle_outline" @click="!isMinimumAmount() ? onRemoveFromCart() : null" size="sm"
    :class="isMinimumAmount() ? 'text-grey-5' : 'tw-cursor-pointer'" />
  <div :class="isMaximumAmount() ? 'text-grey-5 tw-cursor-default' : 'text-default'">{{
      productAmount() }}</div>
  <q-icon name="add_circle_outline" @click="!isMaximumAmount() ? onAddToCart() : null" size="sm"
    :class="isMaximumAmount() ? 'text-grey-5' : 'tw-cursor-pointer'" />
</template>

<script setup lang="ts">
import { IProduct } from 'src/types/shop/shop';

interface Props {
  cartValue: IProduct;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'click:add': [value: IProduct];
  'click:remove': [value: IProduct];
}>();

const productAmount = (): number => {
  return props.cartValue.cart_amount ?? 0
}

const isMaximumAmount = (): boolean => {
  return Number(props.cartValue.cart_amount) >= Number(props.cartValue.stock_amount);
}

const isMinimumAmount = (): boolean => {
  return props.cartValue.cart_amount === 1;
}

const onAddToCart = () => {
  return emit('click:add', props.cartValue);
}

const onRemoveFromCart = () => {
  return emit('click:remove', props.cartValue);
}
</script>

<style scoped></style>
