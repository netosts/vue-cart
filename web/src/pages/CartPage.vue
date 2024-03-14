<template>
  <q-page>
    <div class="q-pt-md q-px-md">
      <q-btn flat icon="arrow_back_ios_new" color="dark" label="Go back" @click="$router.go(-1)" />
    </div>

    <div class="row tw-flex tw-w-full tw-justify-center tw-items-center tw-py-4">
      <q-card v-for="cartValue, cartKey in cart" :key="cartKey" class="col-12 tw-px-[10%]" flat bordered>
        <q-card-section class="tw-flex tw-gap-6"
          :class="{ 'tw-justify-between': $q.screen.gt.sm, 'tw-flex-col': $q.screen.lt.sm }">
          <q-card-section>
            <q-img fit="contain" class="tw-w-[200px] tw-h-[150px] tw-flex tw-mt-2" :src="cartValue[0].image" />
          </q-card-section>
          <q-card-section class="tw-flex">
            <div class="tw-flex tw-flex-col tw-justify-between">
              <div class="tw-flex tw-flex-col">
                <span class="tw-text-xl tw-font-medium">{{ cartValue[0].name }}</span>
                <span class="tw-mt-4">{{ cartValue[0].description }}</span>
              </div>
              <div class="tw-flex tw-items-center tw-gap-2">
                <q-icon name="remove_circle_outline"
                  @click="!isMinimumAmount(cartValue) ? removeFromCart(cartValue[0]) : null" size="sm"
                  :class="isMinimumAmount(cartValue) ? 'text-grey-5' : 'tw-cursor-pointer'" />
                <div :class="isMaximumAmount(cartValue) ? 'text-grey-5 tw-cursor-default' : 'text-default'">{{
        productAmount(cartValue) }}</div>
                <q-icon name="add_circle_outline" @click="!isMaximumAmount(cartValue) ? addToCart(cartValue[0]) : null"
                  size="sm" :class="isMaximumAmount(cartValue) ? 'text-grey-5' : 'tw-cursor-pointer'" />
                <q-separator vertical></q-separator>
                <q-icon name="delete" @click="deleteFromCart(cartValue[0])" size="sm"
                  class="tw-cursor-pointer"></q-icon>
              </div>
            </div>

          </q-card-section>
          <q-card-section>
            <div class="tw-text-accent tw-text-lg tw-font-bold">{{ useCurrencyToUS(cartValue[0].price) }}</div>
          </q-card-section>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCart } from 'src/composable/useCart';
import { useCurrencyToUS } from 'src/composable/useCurrency';
import { useShopStore } from 'src/stores/shop.store';
import { IProduct } from 'src/types/shop/shop';

const shopStore = useShopStore();
const { cart } = storeToRefs(shopStore);
const { addToCart, removeFromCart, deleteFromCart } = useCart();

const productAmount = (cartValue: IProduct[]): number => {
  return cartValue.length
}

const isMaximumAmount = (cartValue: IProduct[]): boolean => {
  return cartValue.length >= (cartValue[0].amount || 0);
}

const isMinimumAmount = (cartValue: IProduct[]): boolean => {
  return cartValue.length === 1;
}
</script>

<style scoped></style>
